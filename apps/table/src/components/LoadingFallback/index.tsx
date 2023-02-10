import { css } from '@emotion/react';

export const LoadingFallback = () => {
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
      Loading...
    </div>
  );
};
