import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};
