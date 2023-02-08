import { QueryClient } from '@tanstack/react-query';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const queries = {
  getTodoList: () =>
    new Promise<Response>((resolve) =>
      setTimeout(() => {
        resolve(fetch('https://jsonplaceholder.typicode.com/todos'));
      }, 1000)
    ),
};

export const queryClient = new QueryClient();
