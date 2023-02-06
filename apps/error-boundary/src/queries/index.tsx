import { QueryClient } from '@tanstack/react-query';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const queries = {
  getTodoList: () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then<Todo[]>((res) =>
      res.json()
    ),
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
    },
  },
});
