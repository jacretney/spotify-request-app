import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/ui/Header';

const Home = () => {
  const history = useHistory();
  const [text, setText] = useState('');

  const onChange = (data) => {
    setText(data);
  };

  const joinParty = () => {
    history.push(`/party/${text}/search`);
  };

  const createParty = () => {
    history.push(`/party/${text}/admin`);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Enter your party code to join...</h2>
        <input
          type="text"
          className="form-control"
          placeholder="eg. 12345"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={joinParty} type="submit">Join party</button>
        <h2>Or...</h2>
        <button onClick={createParty} type="submit">Create a Party</button>
      </div>
    </div>
  );
};

export default Home;
