import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import SongGrid from './components/songs/SongGrid';
import './App.css';

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await Axios(`http://localhost:8080?query=${query}`);

      setSongs(result.data);
      setIsLoading(false);
    }

    fetchSongs();
  }, [query]);


  return (
    <div className="container">
      <Header />
      <Search getQuery={(text) => setQuery(text)} />
      <SongGrid songs={songs} isLoading={isLoading}/>
    </div>
  );
}

export default App;
