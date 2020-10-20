import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Search from './pages/Search';
import Home from './pages/Home';
import PartyAdmin from './pages/PartyAdmin';

import './App.css';

const routeList = {
  index: '/',
  search: '/party/*/search',
  admin: '/party/*/admin',
};

const App = () => (
  <div>
    <Router>
      <Route exact path={routeList.index} component={Home} />
      <Route exact path={routeList.search} component={Search} />
      <Route exact path={routeList.admin} component={PartyAdmin} />
    </Router>
    <ToastContainer />
  </div>
);

export default App;
