import axios from 'axios';
import fs from 'fs';
import path from 'path';
import tk from 'tokenizers';

const parseInterval = (intervalString: string) => {
  const [start, end] = intervalString
    .split(' --> ')
    .map((l) => l.split(','))
    .map(
      ([hms, ms]) =>
        (hms
          ?.split(':')
          .reduce((acc, cur, i) => acc + Number(cur) * 60 ** (2 - i), 0) ??
          NaN) *
          1000 +
        Number(ms)
    );
  return { start: start ?? NaN, end: end ?? NaN };
};

const parseSrt = (rawSrt: string) => {
  return rawSrt
    .normalize('NFC')
    .replace(/\r\n|\r/g, '\n')
    .split('\n\n')
    .map((l) => l.trim())
    .filter((l) => !!l)
    .map((l) => {
      const [indexString, intervalString, ...texts] = l.split('\n');
      if (!indexString || !intervalString) {
        throw new Error(`Invalid srt file: ${l}`);
      }
      const index = Number(indexString);
      const interval = parseInterval(intervalString);
      const text = texts.join(' ').trim();
      if (
        Number.isNaN(index) ||
        Number.isNaN(interval.start) ||
        Number.isNaN(interval.end) ||
        !text
      ) {
        throw new Error(
          `Invalid srt file: ${index}, ${interval.start}, ${interval.end}, ${text}`
        );
      }
      return { index, interval, text };
    });
};

(async () => {
  // const srtDir = './dist/data/srt';
  // const srtFileNames = fs
  //   .readdirSync(srtDir)
  //   .filter((n): n is `${string}.srt` => n.endsWith('.srt'));
  // for (const n of srtFileNames) {
  //   const filePath = path.join(srtDir, n);
  //   const rawSrt = fs.readFileSync(filePath, 'utf-8');
  //   const text = parseSrt(rawSrt)
  //     .map((l) => l.text)
  //     .join('\n');
  //   fs.writeFileSync(path.join(srtDir, `${n}.txt`), text);
  // }

  // const srtTextFilePaths = fs
  //   .readdirSync(srtDir)
  //   .filter((n) => n.endsWith('.txt'))
  //   .map((n) => path.join(srtDir, n));
  // // console.log(srtTextFilePaths);

  // const model = tk.WordPiece.init({});
  // const tokenizer = new tk.Tokenizer(model);
  // tokenizer.train(srtTextFilePaths);

  // // console.log(tokenizer.getVocab());

  // const encoded = await tokenizer.encode("Hello, y'all! How are you 😁 ?");
  // console.log('encoded:', encoded.getTokens());

  // const decoded = await tokenizer.decode(encoded.getIds(), false);
  // console.log('decoded:', decoded);

  const dataDir = './dist/data';
  const { data } = await axios.get<string>(
    'https://raw.githubusercontent.com/e9t/nsmc/master/ratings.txt'
  );
  const content = data
    .split('\n')
    .slice(1)
    .map((l) => l.split('\t')[1])
    .filter((l): l is string => !!l)
    .join('\n');
  fs.writeFileSync(path.join(dataDir, 'nsmc.txt'), content);

  const tokenizer = new tk.Tokenizer(
    tk.WordPiece.init({}, { unkToken: '[UNK]' })
    // tk.WordLevel.init({}, { unkToken: '[UNK]' })
    // tk.BPE.init({}, [], { unkToken: '[UNK]' })
  );
  const specialTokens = ['[UNK]', '[CLS]', '[SEP]', '[PAD]', '[MASK]'];
  tokenizer.addSpecialTokens(specialTokens);
  tokenizer.setNormalizer(tk.nfcNormalizer());
  tokenizer.setPreTokenizer(
    // tk.whitespacePreTokenizer()
    tk.bertPreTokenizer()
  );
  tokenizer.train([path.join(dataDir, 'nsmc.txt')]);
  tokenizer.save(path.join(dataDir, 'nsmc.json'), true);

  const tokenizerJson = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'nsmc.json'), 'utf-8')
  );
  const vocab = tokenizerJson.model.vocab as Record<string, number>;
  for (const k of Object.keys(vocab)) {
    vocab[k] += 5;
  }
  for (const [i, v] of specialTokens.entries()) {
    vocab[v] = i;
  }
  fs.writeFileSync(
    path.join(dataDir, 'nsmc.json'),
    JSON.stringify(tokenizerJson, null, 2)
  );

  const newTokenizer = tk.Tokenizer.fromFile(path.join(dataDir, 'nsmc.json'));
  const encoded = await newTokenizer.encode("Hello, y'all! How are you 😁 ?");
  console.log('encoded:', encoded.getTokens());

  // const encoded = await tokenizer.encode("Hello, y'all! How are you 😁 ?");
  // console.log('encoded:', encoded.getTokens());
  // const decoded = await tokenizer.decode(encoded.getIds(), true);
  // console.log('decoded:', decoded);

  // const tokenizer = tk.Tokenizer.fromFile('./data/bert-wiki.json');
  // const encoded = await tokenizer.encode("Hello, y'all! How are you 😁 ?");
  // console.log('encoded:', encoded.getTokens());
  // const decoded = await tokenizer.decode(encoded.getIds(), true);
  // console.log('decoded:', decoded);
})();
