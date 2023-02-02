import { useRecoilState } from 'recoil';
import { selectText1 } from '../atom';

export const Input1UsingSelector = () => {
  const [text1, setText1] = useRecoilState(selectText1);
  return (
    <input
      value={text1}
      onChange={({ currentTarget }) => setText1(currentTarget.value)}
    />
  );
};
