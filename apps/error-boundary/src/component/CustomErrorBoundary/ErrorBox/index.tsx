import { css } from '@emotion/react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorBox = (props: FallbackProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: auto;
        gap: 16px;
      `}
    >
      <h1>ERROR</h1>
      <pre
        css={css`
          font-size: 16px;
        `}
      >
        {props.error.message}
      </pre>
      <button
        type="button"
        onClick={() => props.resetErrorBoundary()}
        css={css`
          padding: 8px 16px;
        `}
      >
        RETRY
      </button>
    </div>
  );
};
