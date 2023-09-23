import * as tk from 'tokenizers';

// const dataPath = `${__dirname}/data`;

// const tokenizer = tk.Tokenizer.fromFile(
//   `${dataDir}/bert-base-uncased-vocab.txt`
// );

// console.log('tokenizer:', tokenizer);

// tokenizer.encode("Hello, y'all! How are you 😁 ?").then((encoded) => {
//   console.log(encoded);
// });

(async () => {
  // const { data } = await axios.get<string>(
  //   'https://raw.githubusercontent.com/e9t/nsmc/master/ratings.txt'
  // );
  // const content = data
  //   .split('\n')
  //   .slice(1)
  //   .map((l) => l.split('\t')[1])
  //   .filter((l): l is string => !!l)
  //   .slice(0, 10)
  //   .join('\n');
  // fs.writeFileSync('./data/nsmc.txt', content);
  // const model = tk.WordPiece.init({});
  // console.log('model:', model);
  // const tokenizer = new tk.Tokenizer(model);
  // console.log('tokenizer:', tokenizer);
  // tokenizer.train(['./data/nsmc.txt']);
  // console.log(tokenizer.getVocab());
  // const encoded = await tokenizer.encode("Hello, y'all! How are you 😁 ?");
  // console.log('encoded:', encoded.getTokens());

  const tokenizer = tk.Tokenizer.fromFile('./data/bert-wiki.json');
  const encoded = await tokenizer.encode("Hello, y'all! How are you 😁 ?");
  console.log('encoded:', encoded.getTokens());
  const decoded = await tokenizer.decode(encoded.getIds(), true);
  console.log('decoded:', decoded);
})();

// tokenizer.
// tk.WordPiece.init('./data/bert-base-uncased-vocab.txt', {
//   //   continuingSubwordPrefix: '##',
//   //   maxInputCharsPerWord: 100,
//   //   unkToken: '[UNK]',
// });

// const tokenizer = await Tokenizer.fromFile('tokenizer.json');

// const wpEncoded = await tokenizer.encode('Who is John?');

// console.log(wpEncoded.getLength());
// console.log(wpEncoded.getTokens());
// console.log(wpEncoded.getIds());
// console.log(wpEncoded.getAttentionMask());
// console.log(wpEncoded.getOffsets());
// console.log(wpEncoded.getOverflowing());
// console.log(wpEncoded.getSpecialTokensMask());
// console.log(wpEncoded.getTypeIds());
// console.log(wpEncoded.getWordIds());
