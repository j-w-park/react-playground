import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Loading } from './Loading';

interface Props {
  children: ReactNode;
}

export const CustomSuspense = (props: Props) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};
