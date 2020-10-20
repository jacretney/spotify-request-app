import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/ui/Header';

const Home = () => {
  const history = useHistory();
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
  };

  const joinParty = () => {
    history.push(`/party/${text}/search`);
  };

  const createParty = () => {
    console.log('will create a Party');
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
          autoFocus
        />
        <button onClick={joinParty}>Join party</button>
        <h2>Or...</h2>
        <button onClick={createParty}>Create a Party</button>
      </div>
    </div>
  );
};

export default Home;
