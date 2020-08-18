import React from 'react';
import { useSelector } from 'react-redux';

const MyPlaces = () => {
  const places = useSelector(state => state.places);


  return (
    <div className="header">
      <h1>MyPlaces </h1>
      {places
        ? places.map(place => (
          <div>
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
