import { useReducer } from 'react';
import { Counter } from './Counter';

export const App = () => {
  const [, rerender] = useReducer((c) => c + 1, 0);

  return (
    <>
      <h1>key 프롭 테스트</h1>

      <button type="button" onClick={() => rerender()}>
        Re-render
      </button>

      <section>
        <h2>1. 부모 컴포넌트가 렌더링 할 때마다 초기화되는 카운터</h2>
        <Counter key={Math.random().toString()} initial={9123} />
        <p>
          카운터 컴포넌트의 key가 <code>Math.random().toString()</code>으로
          설정되어 있기 때문에 부모 컴포넌트가 렌더링 할 때마다 새로운 카운터
          인스턴스가 생성되고 내부 상태는 초기화됨.
        </p>
      </section>

      <section>
        <h2>2. 초기값을 </h2>
        <Counter key="1" initial={3} />
        <Counter key="1" initial={2} />
        <Counter key="1" initial={1} />
      </section>
    </>
  );
};
