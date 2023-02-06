import { css } from '@emotion/react';

export const ErrorBox = (props: { message?: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <p>에러가 발생했습니다.</p>
      <p>
        <strong>{props.message}</strong>
      </p>
    </div>
  );
};
