import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import MyPlaces from './components/MyPlaces';
import BucketList from './components/BucketList';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <h2>Welcome to Huginn App</h2>
      {/* <Navigation /> */}
      <Home />
      {/* <h1>Welcome to Huginn</h1>
    <h2>your favourite travel list </h2>
    <MyPlaces /> 
    <BucketList /> 
    <Footer />  */}
    </div>
  </Router>
);

export default App;
