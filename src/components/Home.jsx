import React from 'react';
import MyMemories from './MyMemories';

const Home = () => (
  <div className="">
  <div className="home-center"> 
  
     <div className="huginn-logo"> </div>
   </div>
    <h2 className="welcome">Welcome to Huginn, Levy! </h2>
    
    <p>"He sends them out in the morning to fly around the whole world, and by breakfast they are back again." </p>

    <div id="header">
      <div className="map"></div>
     
    </div>

    <MyMemories />
  </div>
);

export default Home;
