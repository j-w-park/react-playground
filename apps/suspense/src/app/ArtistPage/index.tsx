import { Suspense } from 'react';
import { Loading } from '../../components/Loading';
import { Albums } from './Albums';

interface Props {
  artist: { name: string; id: string };
}

export const ArtistPage = (props: Props) => {
  return (
    <>
      <h1>{props.artist.name}</h1>
      <Suspense fallback={<Loading />}>
        <Albums artist={props.artist} />
      </Suspense>
    </>
  );
};
