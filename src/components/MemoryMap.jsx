import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
// import fetchData from '../helpers/fetchData';
import { v4 as uuidv4 } from 'uuid';

<<<<<<< HEAD
function Map() {
  // const [coordinatesFinal, setCoordinatesFinal ]= useState();
  const fetchCities = async () => {
    try {
      const path = '/memories/cities';
      const cities = await fetchData('GET', path);
      return cities;
    } catch (error) {
      console.log('GEO ERROR', error);
    }
  };
=======
export default function MemoryMap(props) {
  const [coordinatesFinal, setCoordinates] = useState([]);
  //============================ MAP ===============================================
  function Map() {
    // const fetchCities = async () => {
    //   try {
    //     const path = '/memories/cities';
    //     const cities = await fetchData('GET', path);
    //     return cities; //array of the cities
    //   } catch (error) {
    //     console.log('GEO ERROR', error);
    //   }
    // };

    // const placesData = [
    //   {
    //     id: 1,
    //     name: 'Gdansk',
    //     coordinates: [54.3, 18.6],
    //   },
    //   {
    //     id: 2,
    //     name: 'Amsterdam',
    //     coordinates: [52.3, 4.89],
    //   },
    // ];

    return (
      <div>
        {/* {coordinatesFinal.lng} */}
        <GoogleMap defaultZoom={4} defaultCenter={{ lat: 52.3, lng: 4.89 }}>
          {coordinatesFinal.map((place) => (
            <Marker
              key={uuidv4()}
              position={{ lat: place.lat, lng: place.lng }}
            />
          ))}
        </GoogleMap>
      </div>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  //============================ MAP ===============================================
>>>>>>> master
  const geocoder = async (location) => {
    let parsedResponse;
    const REACT_APP_GOOGLE_GEO = process.env.REACT_APP_GOOGLE_GEO;
    try {
      let response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${REACT_APP_GOOGLE_GEO}`
      );
      parsedResponse = await response.json();
    } catch (error) {
      console.log('GEO ERROR', error);
    }
    console.log('parsedResponse', parsedResponse);
    if (parsedResponse && parsedResponse.status === 'OK') {
      let coordinates = parsedResponse.results[0].geometry.location;
      return coordinates;
    }
    return null;
  };

  useEffect(() => {
    const functionAura = async () => {
      const locations = props.countriesList; // await fetchCities(); // cities in locations
      console.log('locations', locations);
      const promisedPlaces = locations.map((location) => geocoder(location));
<<<<<<< HEAD
      const finalLocations = await Promise.all(promisedPlaces.filter(promise => promise !== null));
      console.log("finalLocations", finalLocations);
      // return finalLocations;
      // setCoordinatesFinal(finalLocations);
=======
      const finalLocations = await Promise.all(
        promisedPlaces.filter((promise) => promise !== null)
      );
      console.log('finalLocations', finalLocations);
      // return finalLocations;
      setCoordinates(finalLocations); // array { log: lat: } ]
>>>>>>> master
    };

    functionAura();
  }, [props.countriesList]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_JS_API}
        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
