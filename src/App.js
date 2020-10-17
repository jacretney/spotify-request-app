import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Header from './components/ui/Header';
import SongGrid from './components/songs/SongGrid';
import './App.css';

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await Axios('http://localhost:8080');

      setSongs(result.data);
      setIsLoading(false);
    }

    fetchSongs();
  }, []);


  return (
    <div className="container">
      <Header />
      <SongGrid songs={songs} isLoading={isLoading}/>
    </div>
  );
}

export default App;
