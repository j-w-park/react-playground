import { css } from '@emotion/react';
import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        gap: 8px;
      `}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
  );
};
