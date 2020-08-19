import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import fetchData from '../actions/fetch'

const MyPlaces = () => {
  // const places = useSelector(state => state.places);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function wrapperFn() {
      setPlaces(fetchData('places'));
    }
    wrapperFn();
  }, []);
  // try {
  //   setPlaces(fetchData('places'));
  // } catch (error) {
  //   console.log('There was an error:', error);
  // }
  return (
    <div className="header">
      <h1>MyPlaces </h1>
      {places.length
        ? places.map(place => (
          <div key={place._id}>
            <p>{place.username}</p>
            <p>{place.city}</p>
            <p>{place.description} </p>
            <p>{place.title} </p>
          </div>
        ))
        : <p>No places added yet</p>}

    </div>
  );
};

export default MyPlaces;
