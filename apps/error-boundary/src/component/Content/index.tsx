import { useQuery } from '@tanstack/react-query';
import type { Todo } from 'queries';

export const Content = () => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const body = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error('asdf');
      return body as Todo[];
    },
  });

  return (
    <ul>
      list
      {query.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
