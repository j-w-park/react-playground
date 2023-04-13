import { css } from '@emotion/react';
import type { Repository } from '@error-boundary/query/types';
import { invariant } from '@error-boundary/utils';
import { useQuery } from '@tanstack/react-query';

const getUrl = (path: string) =>
  new URL(path, 'https://jsonplaceholder.typicode.com');

export const Content = () => {
  // When using React Query in suspense mode, this pattern of parallelism does not work,
  // since the first query would throw a promise internally and would suspend the component
  // before the other queries run. To get around this, you'll either need to use the
  // useQueries hook (which is suggested) or orchestrate your own parallelism with separate
  // components for each useQuery instance (which is lame).

  const { data: todos } = useQuery({
    queryKey: ['/todos'] as const,
    queryFn: ({ queryKey: [path], signal }) =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
        .then(() => fetch(getUrl(path), { signal }))
        .then<ReadonlyArray<Repository['todo']>>((res) => res.json()),
  });

  const { data: albums } = useQuery({
    queryKey: ['/albums'] as const,
    queryFn: ({ queryKey: [path], signal }) =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
        .then(() => fetch(getUrl(path), { signal }))
        .then<ReadonlyArray<Repository['album']>>((res) => res.json()),
  });

  const { data: users } = useQuery({
    queryKey: ['/users'] as const,
    queryFn: ({ queryKey: [path], signal }) =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
        .then(() => fetch(getUrl(path), { signal }))
        .then<ReadonlyArray<Repository['user']>>((res) => res.json()),
  });

  const { data: posts } = useQuery({
    queryKey: ['/posts'] as const,
    queryFn: ({ queryKey: [path], signal }) =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
        .then(() => fetch(getUrl(path), { signal }))
        .then<ReadonlyArray<Repository['post']>>((res) => res.json()),
  });

  invariant(!!users, 'users must be defined.');

  invariant(!!albums, 'albums must be defined.');

  invariant(!!todos, 'todos must be defined.');

  invariant(!!posts, 'posts must be defined.');

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
      `}
    >
      <h1>useQuery</h1>

      <h2>todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <h2>albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>

      <h2>users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
