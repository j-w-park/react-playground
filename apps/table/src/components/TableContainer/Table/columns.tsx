import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { Todo } from '@table/queries';
import type { ColumnDef } from '@tanstack/react-table';

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

export const columns: ColumnDef<Todo>[] = [
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
    filterFn: (row, columnId, filterValue) =>
      row.getValue<string>(columnId).includes(filterValue),
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
        <span
          css={css`
            width: max-content;
          `}
        >
          {row.getValue<Todo['completed']>() ? 'done' : 'in progress'}
        </span>
      </BaseStyledCell>
    ),
  },
];
