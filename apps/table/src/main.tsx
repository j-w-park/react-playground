import { css, Global } from '@emotion/react';
import styles from '@table/assets/index.css?raw';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={css(styles)} />
    <App />
  </React.StrictMode>
);
