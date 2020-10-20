import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import notify from '../../common/Notify';

const Search = ({ updateIsLoading, updateSongs }) => {
  const [text, setText] = useState('');

  const onChange = (data) => {
    setText(data);
  };

  const fetchSongs = async () => {
    updateIsLoading(true);

    try {
      const result = await Axios(`http://localhost/search?q=${text}`);
      updateSongs(result.data);
    } catch (e) {
      notify.error('An error occurred fetching results, please try again later.');
    }

    updateIsLoading(false);
  };

  useEffect(() => {
    let timer;
    if (text) {
      timer = setTimeout(() => {
        fetchSongs(text);
      }, 500);
    }

    return () => { clearTimeout(timer); };
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
        />
      </form>
    </section>
  );
};

Search.propTypes = {
  updateIsLoading: PropTypes.func.isRequired,
  updateSongs: PropTypes.func.isRequired,
};

export default Search;
