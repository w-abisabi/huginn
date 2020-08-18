import React from 'react';
// react-bootstrap
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import BucketList from './BucketList';
import MyPlaces from './MyPlaces';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h2> Navigation bar </h2>
        <Route exact path="/"> <Home /> </Route>
        <Route path="bucket-list"> <BucketList /> </Route>
        <Route path="my-places"> <MyPlaces /> </Route>
    </div>
  );
}

export default Navigation;
