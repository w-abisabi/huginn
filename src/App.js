import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import Footer from './components/Footer';
import MyPlaces from './components/MyPlaces';
import BucketList from './components/BucketList';
import Add from './components/Add';

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Navigation />
      </nav>
      <Route exact path="/">
        {' '}
        <Home />
        {' '}
      </Route>
      <Route path="/bucket-list">
        {' '}
        <BucketList />
        {' '}
      </Route>
      <Route path="/my-places">
        {' '}
        <MyPlaces />
        {' '}
      </Route>
      <Route path="/add">
        {' '}
        <Add />
        {' '}
      </Route>
    </div>
  </BrowserRouter>
);

export default App;
