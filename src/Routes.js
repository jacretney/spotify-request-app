import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './pages/Search';
import {ToastContainer} from 'react-toastify';

const routeList = {
  'index': '/',
};

const Routes = () => {
  return <div>
    <Router>
      <Route exact path={ routeList.index } component={Search}></Route>
    </Router>
    <ToastContainer></ToastContainer>
  </div>;
};

export default Routes;