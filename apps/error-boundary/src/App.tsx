import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBox } from '@error-boundary/component/ErrorBox';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Content } from './component/Content';

export const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={ErrorBox}>
      <Suspense
        fallback={
          <div>
            <p>loading...</p>
          </div>
        }
      >
        <Content />
      </Suspense>
    </ErrorBoundary>
  );
};
