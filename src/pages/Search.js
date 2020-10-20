import React, { useState } from 'react';

import Header from '../components/ui/Header';
import Search from '../components/ui/SearchBar';
import SongGrid from '../components/songs/SongGrid';

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateSongs = (data) => {
    setSongs(data);
  };

  const updateIsLoading = (data) => {
    setIsLoading(data);
  };

  return (
    <div className="App">
      <Header />
      <Search
        updateIsLoading={updateIsLoading}
        updateSongs={updateSongs}
      />
      <SongGrid songs={songs} isLoading={isLoading} />
    </div>
  );
}

export default App;
