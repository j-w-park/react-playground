import './App.css';
import { CountDisplay } from './components/CountDisplay';

export const App = () => {
  const setCount = (count: number) => {
    window.localStorage.setItem('count', count.toString());
    window.dispatchEvent(new Event('storage'));
  };
  return (
    <main>
      <h1>useSyncExternalStore</h1>

      <CountDisplay />

      <div id="button-container">
        <button
          type="button"
          onClick={() => {
            const count = Number(window.localStorage.getItem('count')) || 0;
            setCount(count + 1);
          }}
        >
          <span>+1</span>
        </button>

        <button
          type="button"
          onClick={() => {
            const count = Number(window.localStorage.getItem('count')) || 0;
            setCount(count - 1);
          }}
        >
          <span>-1</span>
        </button>

        <button
          type="button"
          onClick={() => {
            window.localStorage.removeItem('count');
            window.dispatchEvent(new Event('storage'));
          }}
        >
          <span>reset</span>
        </button>
      </div>

      <button type="button" onClick={() => window.location.reload()}>
        <span>refresh page</span>
      </button>
    </main>
  );
};
