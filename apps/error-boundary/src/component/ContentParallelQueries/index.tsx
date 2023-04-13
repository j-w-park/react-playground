import { css } from '@emotion/react';
import type { Repository } from '@error-boundary/query/types';
import { invariant } from '@error-boundary/utils';
import { useQueries } from '@tanstack/react-query';

const getUrl = (path: string) =>
  new URL(path, 'https://jsonplaceholder.typicode.com');

export const ContentParallelQueries = () => {
  const [{ data: todos }, { data: albums }, { data: users }, { data: posts }] =
    useQueries({
      queries: [
        {
          queryKey: ['/todos'],
          queryFn: () =>
            new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
              .then(() => fetch(getUrl('/todos')))
              .then<ReadonlyArray<Repository['todo']>>((res) => res.json()),
        },
        {
          queryKey: ['/albums'],
          queryFn: () =>
            new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
              .then(() => fetch(getUrl('/albums')))
              .then<ReadonlyArray<Repository['album']>>((res) => res.json()),
        },
        {
          queryKey: ['/users'],
          queryFn: () =>
            new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
              .then(() => fetch(getUrl('/users')))
              .then<ReadonlyArray<Repository['user']>>((res) => res.json()),
        },
        {
          queryKey: ['/posts'],
          queryFn: () =>
            new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
              .then(() => fetch(getUrl('/posts')))
              .then<ReadonlyArray<Repository['post']>>((res) => res.json()),
        },
      ],
    });

  invariant(!!todos, 'todos must be defined.');

  invariant(!!albums, 'albums must be defined.');

  invariant(!!users, 'users must be defined.');

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
      <h1>useQueries</h1>

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
