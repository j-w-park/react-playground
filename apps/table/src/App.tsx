import { css } from '@emotion/react';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback';
import { LoadingFallback } from './components/LoadingFallback';
import { TableContainer } from './components/TableContainer';

export const App = () => {
  const maxWidth = 800;

  const [width, setWidth] = useState(800);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
      `}
    >
      <section
        css={css`
          width: ${width}px;
          height: 300px;
          border-radius: 4px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          padding: 20px;
        `}
      >
        <h2>Table</h2>

        <ErrorBoundary fallbackRender={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <TableContainer />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section
        css={css`
          user-select: none;
        `}
      >
        <label>
          <p
            css={css`
              margin: 0;
            `}
          >
            width: {width}
          </p>
          <input
            type="range"
            css={css`
              width: 800px;
            `}
            min={0}
            max={1}
            step={1 / maxWidth}
            value={width / maxWidth}
            onChange={({ currentTarget }) =>
              setWidth(Number(currentTarget.value) * maxWidth)
            }
          />
        </label>
      </section>
    </div>
  );
};
