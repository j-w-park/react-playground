import { css } from '@emotion/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback';
import { LoadingFallback } from '../LoadingFallback';
import { Table } from './Table';

export const TableContainer = (props: { width: number }) => {
  return (
    <div
      css={css`
        width: ${props.width}px;
        height: 300px;
        display: flex;
        flex-direction: column;
        padding: 20px;
      `}
    >
      <h2>Table</h2>

      <ErrorBoundary fallbackRender={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <Table />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
