import { RecoilRoot } from 'recoil';
import { Count } from '../Count';

export const MultiRecoilRootTest = () => {
  return (
    <>
      <RecoilRoot>
        <h2>Root 0</h2>
        <Count countId={0} />
        <Count countId={1} />
      </RecoilRoot>

      <RecoilRoot>
        <h2>Root 1</h2>
        <Count countId={0} />
        <Count countId={1} />
      </RecoilRoot>
    </>
  );
};
