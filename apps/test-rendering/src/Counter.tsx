import { useState } from 'react';

export const Counter = (props: { initial: number }) => {
  const [count, setCount] = useState(props.initial);

  return (
    <div>
      <p>{count}</p>
      <label htmlFor="asdf">asdf</label>
      <input id="asdf" />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment + 1
      </button>
    </div>
  );
};
