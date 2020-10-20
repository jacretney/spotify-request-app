import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {ToastContainer} from 'react-toastify';
import notify from './common/Notify';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import SongGrid from './components/songs/SongGrid';

import './App.css';

function App() {
  const [ songs, setSongs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useState('');

  const fetchSongs = async (query) => {
    setIsLoading(true);

    try {
      const result = await Axios(`http://localhost/search?q=${query}`);
      setSongs(result.data);
    } catch (e) {
      console.error(e);
      notify.error('An error occurred fetching results, please try again later.');
    }

    setIsLoading(false);
  }

  useEffect(() => {
    let timer; 
    if (query) {
      timer = setTimeout(() => {
        fetchSongs(query);
      }, 500);
    }

    return () => { clearTimeout(timer) };
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(text) => setQuery(text)} />
      <SongGrid songs={songs} isLoading={isLoading}/>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
