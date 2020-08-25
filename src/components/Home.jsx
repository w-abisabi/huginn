import React, { useState } from 'react';
import MyMemories from './MyMemories';
import { useAuth } from "../providers/auth-provider";

<<<<<<< HEAD
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
=======
function Home() {
  const { user, logout } = useAuth();
  const [userInfo, setUserInfo] = useState();

  const verifyUser = async () => {
    const response = await fetch(`/.netlify/functions/user`);
    if (response.ok) {
      setUserInfo(await response.text());
    } else if (response.status === 401) {
      logout();
    }
  };

  return (
    <div className="">
      <>
        <p>Logged in as: {user.email}</p>
        <button onClick={logout}>Logout</button>
        <button onClick={verifyUser}>Verify user</button>
        {userInfo && <p>User ok: {userInfo}</p>}
      </>
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
}
>>>>>>> master

export default Home;
