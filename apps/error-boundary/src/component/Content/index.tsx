import { useQuery } from '@tanstack/react-query';
import type { Todo } from '../../queries';

export const Content = () => {
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then<Todo[]>((res) =>
        res.json()
      ),
    initialData: [],
  });

  return (
    <ul>
      list
      {query.data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
