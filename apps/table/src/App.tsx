import { css } from '@emotion/react';
import { Table } from 'components/Table';

export const App = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <section
        css={css`
          width: 400px;
          height: 300px;

          border-radius: 4px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

          display: flex;
          flex-direction: column;
          padding: 20px;
        `}
      >
        <h2>Table</h2>
        <Table />
      </section>
    </div>
  );
};
