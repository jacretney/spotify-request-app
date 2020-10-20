import React, { useState } from 'react';
import {ToastContainer} from 'react-toastify';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import SongGrid from './components/songs/SongGrid';

import './App.css';

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useState('');

  const updateSongs = (data) => {
    setSongs(data);
  }

  const updateIsLoading = (data) => {
    setIsLoading(data);
  }

  const updateQuery = (data) => {
    setQuery(data);
  }

  return (
    <div className="App">
      <Header />
      <Search updateQuery={updateQuery} updateIsLoading={updateIsLoading} updateSongs={updateSongs} />
      <SongGrid songs={songs} isLoading={isLoading} />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
