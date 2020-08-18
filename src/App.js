import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import MyPlaces from './components/MyPlaces';
import BucketList from './components/BucketList';


const App = () => (
  <div>
    <Navbar />
    <Home /> 
    <h1>Welcome to Huginn</h1>
    <h2>your favourite travel list </h2>
    <MyPlaces /> 
    <BucketList /> 
    <Footer /> 
  </div>
);

export default App;
