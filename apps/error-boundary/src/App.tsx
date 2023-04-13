import { Content } from './component/Content';
import { CustomSuspense } from './component/CustomSuspense';
import { CustomErrorBoundary } from './component/CustomErrorBoundary';

export const App = () => {
  return (
    <CustomErrorBoundary>
      <CustomSuspense>
        <Content />
      </CustomSuspense>
    </CustomErrorBoundary>
  );
};
