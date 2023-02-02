import { useRecoilState } from 'recoil';
import { textsAtom } from '../atom';

export const Input1 = () => {
  const [{ text1 }, setTexts] = useRecoilState(textsAtom);
  return (
    <input
      value={text1}
      onChange={({ currentTarget }) =>
        setTexts((prev) => ({ ...prev, text1: currentTarget.value }))
      }
    />
  );
};
