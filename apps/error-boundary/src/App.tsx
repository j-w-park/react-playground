import { css } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { Content } from './component/Content';
// import { ContentError } from './component/ContentError';
import { ContentParallelQueries } from './component/ContentParallelQueries';
import { CustomErrorBoundary } from './component/CustomErrorBoundary';
import { CustomSuspense } from './component/CustomSuspense';

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
          {/* <ContentError /> */}
          <ContentParallelQueries />
        </CustomSuspense>
      </CustomErrorBoundary>
      <ReactQueryDevtools />
    </main>
  );
};
