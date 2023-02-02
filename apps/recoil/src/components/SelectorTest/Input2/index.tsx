import { useRecoilState } from 'recoil';
import { textsAtom } from '../atom';

export const Input2 = () => {
  const [{ text2 }, setTexts] = useRecoilState(textsAtom);
  return (
    <input
      value={text2}
      onChange={({ currentTarget }) =>
        setTexts((prev) => ({ ...prev, text2: currentTarget.value }))
      }
    />
  );
};
