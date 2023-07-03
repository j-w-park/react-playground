import { useMutation } from '@tanstack/react-query';

export const Button = () => {
  const mutation = useMutation({
    mutationKey: ['mutation-state'],
    mutationFn: () =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)),
  });

  return (
    <button type="button" onClick={() => mutation.mutate()}>
      {mutation.status}
    </button>
  );
};
