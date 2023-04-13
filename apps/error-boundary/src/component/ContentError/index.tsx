import { useQuery } from '@tanstack/react-query';

export const ContentError = () => {
  useQuery({
    queryKey: ['/error'],
    queryFn: () =>
      new Promise<void>((_, reject) =>
        setTimeout(() => reject(new Error('WTF')), 1000)
      ),
  });

  return null;
};
