import { css, Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { queryClient } from './repository';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        #root {
          min-width: 100vw;
          min-height: 100vh;
        }
        :where(*, *::before, *::after) {
          box-sizing: border-box;
          user-select: none;
        }
      `}
    />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
