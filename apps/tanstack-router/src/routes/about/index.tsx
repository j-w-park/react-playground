import { Route } from '@tanstack/react-router';
import { rootRoute } from '..';

const About = () => {
  return (
    <main>
      <h1>About</h1>
    </main>
  );
};

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'about',
  path: '/about',
  component: About,
});
