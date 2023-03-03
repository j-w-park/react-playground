import { Route } from '@tanstack/react-router';
import { rootRoute } from '..';

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'home',
  path: '/',
  component: Home,
});
