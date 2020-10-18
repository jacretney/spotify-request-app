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
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  // TOOD: This needs to be debounced
  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);

      try {
        const result = await Axios(`http://localhost/search?q=${query}`);
        setSongs(result.data);
      } catch (e) {
        console.log('fuckkk');
        notify.error('An error occurred fetching results, please try again later.');
      }
      
      setIsLoading(false);
    }

    fetchSongs();
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
