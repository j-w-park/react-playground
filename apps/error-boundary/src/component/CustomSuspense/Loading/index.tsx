import { css } from '@emotion/react';

export const Loading = () => {
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
      `}
    >
      <p>Loading...</p>
    </div>
  );
};
