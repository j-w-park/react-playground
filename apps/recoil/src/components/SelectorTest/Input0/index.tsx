import { useRecoilState } from 'recoil';
import { textsAtom } from '../atom';

export const Input0 = () => {
  const [{ text0 }, setTexts] = useRecoilState(textsAtom);
  return (
    <input
      value={text0}
      onChange={({ currentTarget }) =>
        setTexts((prev) => ({ ...prev, text0: currentTarget.value }))
      }
    />
  );
};
