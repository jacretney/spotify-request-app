import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import notify from '../../common/Notify';

const Search = ({ updateQuery, updateIsLoading, updateSongs }) => {
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
    updateQuery(text);
  }

  const fetchSongs = async (text) => {
    updateIsLoading(true);

    try {
      const result = await Axios(`http://localhost/search?q=${text}`);
      updateSongs(result.data);
    } catch (e) {
      console.error(e);
      notify.error('An error occurred fetching results, please try again later.');
    }

    updateIsLoading(false);
  }

  useEffect(() => {
    let timer;
    if (text) {
      timer = setTimeout(() => {
        fetchSongs(text);
      }, 500);
    }

    return () => { clearTimeout(timer) };
  }, [text]);

  return (
    <section className="search">
      <form>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search for a song..." 
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search;
