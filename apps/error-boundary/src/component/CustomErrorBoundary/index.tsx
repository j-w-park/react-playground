import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBox } from './ErrorBox';

interface Props {
  children: ReactNode;
}

export const CustomErrorBoundary = (props: Props) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ErrorBox}>
      {props.children}
    </ErrorBoundary>
  );
};
