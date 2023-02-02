import '../main.css';
import './index.css';

import { useState } from 'react';
import { ArtistPage } from './ArtistPage';

export const App = () => {
  const [opened, setOpened] = useState(false);

  return opened ? (
    <>
      <ArtistPage artist={{ id: 'the-beatles', name: 'The Beatles' }} />
      <button type="button" onClick={() => setOpened(false)}>
        reset
      </button>
    </>
  ) : (
    <button type="button" onClick={() => setOpened(true)}>
      open
    </button>
  );
};
