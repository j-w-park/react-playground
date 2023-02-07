import { css, Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import styles from '@table/assets/index.css?raw';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { queryClient } from '@table/queries';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={css(styles)} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
