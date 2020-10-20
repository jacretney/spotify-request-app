const getPartyId = (location) => {
  const path = location.pathname.split('/');
  if (path[2]) {
    return path[2];
  }
}

export default getPartyId;
