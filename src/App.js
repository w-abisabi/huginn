import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import Footer from './components/Footer';
import MyPlaces from './components/MyPlaces';
import BucketList from './components/BucketList';

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
        <p>Add Component</p>
        {' '}
      </Route>
    </div>
  </BrowserRouter>
);

export default App;
