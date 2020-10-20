import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import getPartyId from '../../helpers/getPartyId';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const partyId = getPartyId(location);

  const leaveParty = () => {
    // If admin, we should probably end the party
    history.push('/');
  };

  const getTemplate = (partyId) => {
    if (!partyId) {
      return (
        <header>
          <p className="branding">Song Requests App</p>
          <p className="party-id" />
          <button className="party-button">Join a party</button>
        </header>
      );
    }

    return (
      <header>
        <p className="branding">Song Requests App</p>
        <p className="party-id">
          Party ID:
          {partyId}
        </p>
        <button className="party-button" onClick={leaveParty}>Leave party</button>
      </header>
    );
  };

  return getTemplate(partyId);
};

export default Header;
