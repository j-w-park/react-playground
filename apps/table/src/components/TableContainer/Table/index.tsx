import type { Todo } from '@table/queries';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { memo } from 'react';
import { columns } from './columns';

export const Table = memo((props: { data: Todo[] }) => {
  const tableInstance = useReactTable<Todo>({
    columns,
    data: props.data.slice(0, 1),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
});
