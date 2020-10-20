import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/ui/Header';
import getPartyId from '../helpers/getPartyId';

const PartyAdmin = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <p>
        Your room ID is:
        {getPartyId(location)}
      </p>
    </div>
  );
};

export default PartyAdmin;
