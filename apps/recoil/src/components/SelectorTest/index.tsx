import { RecoilRoot } from 'recoil';
import { Input0 } from './Input0';
import { Input0UsingSelector } from './Input0UsingSelector';
import { Input1 } from './Input1';
import { Input1UsingSelector } from './Input1UsingSelector';
import { Input2 } from './Input2';
import { Input2UsingSelector } from './Input2UsingSelector';

export const SelectorTest = () => {
  return (
    <RecoilRoot>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>No Selector</h2>
        <Input0 />
        <Input1 />
        <Input2 />

        <h2>Selector</h2>
        <Input0UsingSelector />
        <Input1UsingSelector />
        <Input2UsingSelector />
      </div>
    </RecoilRoot>
  );
};
