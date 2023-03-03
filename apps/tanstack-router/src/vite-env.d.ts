/// <reference types="vite/client" />

import type { router } from './routes';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
