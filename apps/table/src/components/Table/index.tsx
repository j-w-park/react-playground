import { css } from '@emotion/react';
import type { Todo } from '@table/queries';
import { queries } from '@table/queries';
import { useQuery } from '@tanstack/react-query';
import type { Column } from 'react-table';
import { useTable } from 'react-table';

const columns: ReadonlyArray<Column<Todo>> = [
  {
    accessor: 'id', // accessor is the "key" in the data
    Header: 'ID',
  },
  {
    accessor: 'title',
    Header: 'Title',
  },
  {
    accessor: 'completed',
    Header: 'Completed',
  },
  {
    accessor: 'userId',
    Header: "User's ID",
  },
];

export const Table = () => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      queries.getTodoList().then<Todo[]>((response) => response.json()),
  });

  const tableInstance = useTable<Todo>({
    columns,
    data: query.data ?? [],
  });

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table
      {...tableInstance.getTableProps()}
      css={css`
        // flex-shrink: 0;
        & tr {
          background: #242424;
          outline-bottom: 1px solid #ccc;
        }
        & th {
          padding: 0;
        }
        & td {
          padding: 0;
        }
      `}
    >
      <thead
        css={css`
          position: sticky;
          top: 0;
          background-color: inherit;
        `}
      >
        {tableInstance.headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => (
              <th {...header.getHeaderProps()}>{header.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...tableInstance.getTableBodyProps()}>
        {tableInstance.rows.map((row) => {
          tableInstance.prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
