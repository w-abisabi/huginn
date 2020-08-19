import React from 'react';
// import { useSelector } from 'react-redux';
import fetchData from '../actions/fetch.js'

const MyPlaces = async () => {
  // const places = useSelector(state => state.places);
  const places = await fetchData('places');
  console.log('Places:', places);


  return (
    <div className="header">
      <h1>MyPlaces </h1>
      {places.length
        ? places.map(place => (
          <div key={place.username}>
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
