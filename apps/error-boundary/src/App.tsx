import { css } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MutationTest } from './component/MutationTest';

export const App = () => {
  return (
    <main
      css={css`
        width: 100vw;
        height: 100vh;
      `}
    >
      <MutationTest />
      <ReactQueryDevtools />
    </main>
  );
};
