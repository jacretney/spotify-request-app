import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { debounce } from 'lodash';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import SongGrid from './components/songs/SongGrid';

import './App.css';

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  // TOOD: This needs to be debounced
  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);
      const result = await Axios(`http://localhost/search?q=${query}`);

      setSongs(result.data);
      setIsLoading(false);
    }

    debounce(() => fetchSongs(), 500)();
  }, [query]);


  return (
    <div className="App">
      <Header />
      <Search getQuery={(text) => setQuery(text)} />
      <SongGrid songs={songs} isLoading={isLoading}/>
    </div>
  );
}

export default App;
