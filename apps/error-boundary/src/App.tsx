import { css } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CustomSuspense } from './component/CustomSuspense';
import { CustomErrorBoundary } from './component/CustomErrorBoundary';
// import { Content } from './component/Content';

export const App = () => {
  return (
    <main
      css={css`
        width: 100vw;
        height: 100vh;
      `}
    >
      <CustomErrorBoundary>
        <CustomSuspense>
          {/* <Content /> */}
        </CustomSuspense>
      </CustomErrorBoundary>
      <ReactQueryDevtools />
    </main>
  );
};
