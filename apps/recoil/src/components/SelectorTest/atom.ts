import { atom, DefaultValue, selector } from 'recoil';

interface TextsAtom {
  text0: string;
  text1: string;
  text2: string;
}

export const textsAtom = atom<TextsAtom>({
  key: 'atom/texts',
  default: { text0: 'text 0', text1: 'text 1', text2: 'text 2' },
});

export const selectText0 = selector({
  key: 'selector/texts/text0',
  get: ({ get }) => get(textsAtom).text0,
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(textsAtom, (prev) => ({ ...prev, text0: newValue }));
  },
});

export const selectText1 = selector({
  key: 'selector/texts/text1',
  get: ({ get }) => get(textsAtom).text1,
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(textsAtom, (prev) => ({ ...prev, text1: newValue }));
  },
});

export const selectText2 = selector({
  key: 'selector/texts/text2',
  get: ({ get }) => get(textsAtom).text2,
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(textsAtom, (prev) => ({ ...prev, text2: newValue }));
  },
});
