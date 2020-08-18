import React from 'react';
import { useSelector } from 'react-redux';

const MyPlaces = () => {
  const places = useSelector((state) => state.places);

  const myPlaces = places.map(
    (place) => (place.city, place.description, place.title)
  );

  return (
    <div className="header">
      <h1>MyPlaces </h1>
      <p>{myPlaces}</p>
    </div>
  );
};

export default MyPlaces;
