import React, { useState, useEffect } from 'react';
import MyPlaces from './MyPlaces';
import MemoryMap from './MemoryMap';
import { useAuth } from '../providers/auth-provider';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'


function Home() {
  const { user, logout } = useAuth();
  const [userInfo, setUserInfo] = useState();
  const [nCities, setNCities] = useState();
  const [nCountries, setNCountries] = useState();
  const [nMemories, setNMemories] = useState();



  const verifyUser = async () => {
    const response = await fetch(`/.netlify/functions/user`);
    if (response.ok) {
      setUserInfo(await response.text());
    } else if (response.status === 401) {
      logout();
    }
  };

  const coverphoto =
    'https://i.ibb.co/G3VyVLH/41323119-10205298342934849-1734228371589562368-n.jpg'; // change to user.coverphoto after fixing mongo

  useEffect(() => {
    const getNCountries = async () => {
      const countries = await fetchData('GET', '/memories/countries/');
      setNCountries(countries.length);
    }
    const getNCities = async () => {
      const cities = await fetchData('GET', '/memories/cities/');
    setNCities(cities.length);
    }
    const getNMemories = async () => {
      const memories = await fetchData('GET', '/memories/');
      setNMemories(memories.length);
    }
    getNCountries();
    getNCities();
    getNMemories();
  }, []);

  return (
    <div>
      <div className="cover">
        <div
          className="cover-photo"
          style={{ backgroundImage: `url(${coverphoto})` }}
        >
          <h2 className="welcome">Welcome to Huginn! </h2>
          <h2 className="stats"><i className="fas fa-map-pin"></i> countries: {nCountries} | cities: {nCities} | memories: {nMemories} </h2>
          <div className="logged-as">Logged in as: {user.email} | <a href="https://www.beautiful.ai/-M9byEexZg7hQ6J3F30A/1" className="logout-btn" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>
          </a></div>
          <Link to="/new" className="add-cover-btn">
            ADD MEMORY
          </Link>
          <button className="d-none" onClick={verifyUser}>
            Verify user
          </button>
          {userInfo && <p>User ok: {userInfo}</p>}
        </div>
      </div>
      <div className="home-center">
        <div className="huginn-logo"> </div>
      </div>
      <p>
        "He sends them out in the morning to fly around the whole world, and by
        breakfast they are back again."
      </p>
      <MemoryMap />
      <MyPlaces />
    </div>
  );
}

export default Home;
