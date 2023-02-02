import { useEffect, useState } from 'react';

interface UseFetchArguments<T> {
  getRequest: () => Request;
  onResponse: (response: Response) => T | Promise<T>;
}

export const useFetch = <T>(args: UseFetchArguments<T>) => {
  const [data, setData] = useState<T | undefined>();

  const [error, setError] = useState<unknown>(undefined);

  const [promise, setPromise] = useState<Promise<void> | undefined>(() => {});

  useEffect(() => {
    if (data !== undefined || error !== undefined || promise !== undefined) {
      return;
    }
    setPromise(
      (async () => {
        try {
          await new Promise<void>((r) => {
            setTimeout(() => r(), 3000);
          });
          const response = await fetch(args.getRequest());
          const data = await args.onResponse(response);
          setData(data);
        } catch (e) {
          setError(e);
        }
      })()
    );
  }, [args, data, error]);

  if (data) {
    return data;
  }

  if (error) {
    throw error;
  }

  throw promise;
};
