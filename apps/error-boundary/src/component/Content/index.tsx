import { useQuery } from '@tanstack/react-query';
import type { Todo } from '@error-boundary/queries';

export const Content = () => {
  // const errorQuery = useQuery({
  //   queryKey: ['error'],
  //   queryFn: () =>
  //     new Promise((_, reject) =>
  //       setTimeout(() => reject(new Error('Mocking error')), 1000)
  //     ),
  // });

  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then<
        ReadonlyArray<{
          readonly completed: boolean;
          readonly id: number;
          readonly title: string;
          readonly userId: number;
        }>
      >((res) => res.json()),
  });

  return (
    <ul>
      - todo list -
      {query.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
