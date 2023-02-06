import type { ReactElement } from 'react';
import { ErrorBox } from './ErrorBox';

export const ErrorBoundary = (props: { children: ReactElement }) => {
  try {
    return props.children;
  } catch (e) {
    if (e instanceof Error) {
      return <ErrorBox message={e.message} />;
    }
    return <ErrorBox message="알 수 없는 에러가 발생했습니다." />;
  }
};
