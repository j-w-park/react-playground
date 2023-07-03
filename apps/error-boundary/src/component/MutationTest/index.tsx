import { useMutation } from '@tanstack/react-query';
import { Button } from './button';

export const MutationTest = () => {
  const mutation = useMutation({
    mutationKey: ['mutation-state'],
    mutationFn: () =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 2000)),
  });

  return (
    <div>
      <div>
        <Button />
        <Button />
      </div>

      <div>
        <button type="button" onClick={() => mutation.mutate()}>
          {mutation.status}
        </button>
        <button type="button" onClick={() => mutation.mutate()}>
          {mutation.status}
        </button>
      </div>
    </div>
  );
};
