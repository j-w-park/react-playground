import { useRecoilState } from 'recoil';
import { countAtom } from './atom';

export const Count = (props: { countId: number }) => {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <p>
        Counter[{props.countId}]: {count}
      </p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        + 1
      </button>
    </div>
  );
};
