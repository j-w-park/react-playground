import { css } from '@emotion/react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = (props: FallbackProps) => {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #555;
      `}
    >
      {props.error.message}
    </div>
  );
};
