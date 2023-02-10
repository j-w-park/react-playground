import { QueryClient } from '@tanstack/react-query';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const queries = {
  getTodoList: async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoList = (await response.json()) as Todo[];
    return todoList;
  },
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
