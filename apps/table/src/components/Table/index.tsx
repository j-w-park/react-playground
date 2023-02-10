import type { Todo } from '@table/queries';
import { queries } from '@table/queries';
import { useQuery } from '@tanstack/react-query';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { memo } from 'react';
import { columns } from './columns';
import { TableStyles } from './styles';

export const Table = memo(() => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: queries.getTodoList,
  });

  const tableInstance = useReactTable<Todo>({
    data: query.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

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
