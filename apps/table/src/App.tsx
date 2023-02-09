import { css } from '@emotion/react';
import { Table } from '@table/components/Table';
import { useState } from 'react';

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

        <Table />
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
