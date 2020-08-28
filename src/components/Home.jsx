import React, { useState, useEffect } from 'react';
import MyPlaces from './MyPlaces';
import SellingPoints from './SellingPoints';
import MemoryMap from './MemoryMap';
import { useAuth } from '../providers/auth-provider';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'


function Home() {
  const { user, logout } = useAuth();
  const [nCities, setNCities] = useState();
  const [nCountries, setNCountries] = useState();
  const [nMemories, setNMemories] = useState();
  // const [countriesList, setCountriesList] = useState([]);
  const [memoryMapHTML, setMemoryMapHTML] = useState();

  const coverphoto =
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'; // change to user.coverphoto after fixing mongo

  useEffect(() => {
    const getNCountries = async () => {
      const countries = await fetchData('GET', '/memories/countries/');
      setNCountries(countries.length);
    }
    const getNCities = async () => {
      const cities = await fetchData('GET', '/memories/cities/');
      // setCountriesList(cities);
      setMemoryMapHTML(<MemoryMap countriesList={cities}/>) // <<<<<<<<<<<<<<<<<
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
          <h2 className="stats"><i className="fas fa-passport"></i> countries: {nCountries} | cities: {nCities} | memories: {nMemories} </h2>
          <Link to="/new" className="add-cover-btn">
            ADD MEMORY
          </Link>
          <div className="logged-as">logged in as: {user.email} | <Link to="/login" onClick={logout}><i className="fas fa-sign-out-alt"></i></Link>
          </div>
        </div>
      </div>
      <SellingPoints />
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <div className="home-center">
        <div className="huginn-logo"> </div>
        <p className="quote">
          "He sends them out in the morning to fly around the whole world, and by
          breakfast they are back again."
      </p>
      </div>
      {memoryMapHTML}
      
      {/* <MemoryMap countriesList={countriesList}/> */}
      <MyPlaces />
    </div>
  );
}

export default Home;
