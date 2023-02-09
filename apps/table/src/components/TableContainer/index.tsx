import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { Todo } from '@table/queries';
import { queries } from '@table/queries';
import { useQuery } from '@tanstack/react-query';
import type { ColumnDef } from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { memo } from 'react';
import { TableStyles } from './styles';

const BaseStyledCell = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const HeaderCell = styled(BaseStyledCell)`
  justify-content: center;
  & > * {
    width: max-content;
  }
`;

const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'id',
    header: () => (
      <HeaderCell>
        <span>ID</span>
      </HeaderCell>
    ),
    cell: (row) => (
      <BaseStyledCell
        css={css`
          justify-content: center;
        `}
      >
        <span>{row.getValue<Todo['id']>()}</span>
      </BaseStyledCell>
    ),
  },
  {
    accessorKey: 'title',
    header: () => (
      <HeaderCell>
        <span>Title</span>
      </HeaderCell>
    ),
    cell: (row) => (
      <BaseStyledCell>
        <span>{row.getValue<Todo['title']>()}</span>
      </BaseStyledCell>
    ),
  },
  {
    accessorKey: 'userId',
    header: () => (
      <HeaderCell>
        <span>User ID</span>
      </HeaderCell>
    ),
    cell: (row) => (
      <BaseStyledCell
        css={css`
          justify-content: flex-end;
        `}
      >
        <span>{row.getValue<Todo['userId']>()}</span>
      </BaseStyledCell>
    ),
  },
  {
    accessorKey: 'completed',
    header: () => (
      <HeaderCell>
        <span>Completed</span>
      </HeaderCell>
    ),
    cell: (row) => (
      <BaseStyledCell>
        <span>
          {row.getValue<Todo['completed']>() ? 'done' : 'in progress'}
        </span>
      </BaseStyledCell>
    ),
  },
];

export const TableContainer = memo(() => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      queries.getTodoList().then<Todo[]>((response) => response.json()),
  });

  const tableInstance = useReactTable<Todo>({
    columns,
    data: query.data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (query.isLoading) {
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
  }

  return (
    <TableStyles>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map(({ id, headers }) => (
            <tr key={id}>
              {headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyles>
  );
});
