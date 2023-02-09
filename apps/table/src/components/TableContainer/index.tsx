import { css } from '@emotion/react';
import type { Todo } from '@table/queries';
import { queries } from '@table/queries';
import { useQuery } from '@tanstack/react-query';
import { TableStyles } from './styles';
import { Table } from './Table';

export const TableContainer = () => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      queries.getTodoList().then<Todo[]>((response) => response.json()),
  });

  if (query.isError) {
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
        {query.error instanceof Error ? query.error.message : 'Unknown error'}
      </div>
    );
  }

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
      <Table data={query.data} />
    </TableStyles>
  );
};
