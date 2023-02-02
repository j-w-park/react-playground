import { useRecoilState } from 'recoil';
import { selectText2 } from '../atom';

export const Input2UsingSelector = () => {
  const [text2, setText2] = useRecoilState(selectText2);
  return (
    <input
      value={text2}
      onChange={({ currentTarget }) => setText2(currentTarget.value)}
    />
  );
};
