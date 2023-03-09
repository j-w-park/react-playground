import { useSyncExternalStore } from 'react';

export const CountDisplay = () => {
  const count = useSyncExternalStore(
    (callback: () => void) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    () => Number(window.localStorage.getItem('count')) || 0
  );
  return <h2>{count}</h2>;
};
