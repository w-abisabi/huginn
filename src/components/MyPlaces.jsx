import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react-redux';
// import fetchData from '../actions/fetch'

const MyPlaces = () => {
  // const places = useSelector(state => state.places);
  const [places, setPlaces] = useState([]);


  // componentDidMount = () => {
  //   this.fetchData();
  // };

  // LAST vesion -----------------
  // useEffect(() => {
  //   async function wrapperFn() {
  //     setPlaces(fetchData('places').then());
  //   }
  //   wrapperFn();
  // }, []);
  // LAST vesion -----------------

  // try {
  //   setPlaces(fetchData('places'));
  // } catch (error) {
  //   console.log('There was an error:', error);
  // }

  const fetchData = async () => {
    const response = await fetch('/.netlify/functions/api/places', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await response.json()
    setPlaces(data[0]);
    console.log('Data is here', data);
  };

  useEffect(() => {
    fetchData();
  });

    return (
      <div className="header">
        <h1>MyPlaces </h1>
        {places}
        {/* {places.length ? (
          places.map((place) => (
            <div key={place._id}>
              <p>{place.username}</p>
              <p>{place.city}</p>
              <p>{place.description} </p>
              <p>{place.title} </p>
            </div>
          ))
        ) : (
          <p>No places added yet</p>
        )} */}
      </div>
    );
}

export default MyPlaces;
