import { useFetch } from '../../../hooks/fetch';

interface Props {
  artist: { name: string; id: string };
}

export const Albums = (props: Props) => {
  console.log('Albums', props.artist.id);
  const albums = useFetch<{ id: number; title: string; year: number }[]>(
    fetch('/data.json').then((response) => response.json())
  );

  return (
    <ul>
      {albums.map(({ id, title, year }) => (
        <li key={id}>
          {title} ({year})
        </li>
      ))}
    </ul>
  );
};
