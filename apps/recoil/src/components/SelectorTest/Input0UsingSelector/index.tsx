import { useRecoilState } from 'recoil';
import { selectText0 } from '../atom';

export const Input0UsingSelector = () => {
  const [text0, setText0] = useRecoilState(selectText0);
  return (
    <input
      value={text0}
      onChange={({ currentTarget }) => setText0(currentTarget.value)}
    />
  );
};
