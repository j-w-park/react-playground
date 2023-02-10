import { css } from '@emotion/react';
import { useState } from 'react';
import { TableContainer } from './components/TableContainer';

export const App = () => {
  const maxWidth = 800;

  const [width, setWidth] = useState(800);

  const [searchValue, setSearchValue] = useState('');

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
          border-radius: 4px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        `}
      >
        <TableContainer width={width} />
      </section>

      <section
        css={css`
          user-select: none;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 10px;

            & > label > * {
              margin: 0;
            }
          `}
        >
          <label
            css={css`
              display: flex;
              gap: 8px;
            `}
          >
            <span>search:</span>
            <input
              value={searchValue}
              onChange={({ currentTarget }) =>
                setSearchValue(currentTarget.value)
              }
            />
          </label>

          <label>
            <p>width: {width}</p>
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
        </div>
      </section>
    </div>
  );
};
