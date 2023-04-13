import { css } from '@emotion/react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorBox = (props: FallbackProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <p>에러가 발생했습니다.</p>
      <p>
        <strong>{props.error.message}</strong>
      </p>
      <button type="button" onClick={() => props.resetErrorBoundary()}>
        retry
      </button>
    </div>
  );
};
