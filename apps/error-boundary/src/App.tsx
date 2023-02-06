import { ErrorBoundary } from './component/ErrorBoundary';
import { Content } from './component/Content';

export const App = () => {
  return (
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
  );
};
