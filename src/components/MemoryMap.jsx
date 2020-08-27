import React, { useEffect } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import fetchData from '../helpers/fetchData';

function Map() {
  const fetchCities = async () => {
    try {
      const path = '/memories/cities';
      const cities = await fetchData('GET', path);
      return cities;
    } catch (error) {
      console.log('GEO ERROR', error);
    }
  };

  const geocoder = async (location) => {
    const REACT_APP_GOOGLE_GEO = process.env.REACT_APP_GOOGLE_GEO;
    try {
      let response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${REACT_APP_GOOGLE_GEO}`
      );
      const parsedResponse = await response.json();
      console.log('parsedResponse', parsedResponse);
      let coordinates = await parsedResponse.results[0].geometry.location;
      console.log('coordinates', coordinates);
      return coordinates;
    } catch (error) {
      console.log('GEO ERROR', error);
    }
  };

  useEffect(() => {
    const functionAura = async () => {
      const locations = await fetchCities();
      return locations;
    };
    functionAura().then((locations) => {
      const placesData2 = locations.map(
        async (location) => await geocoder(location)
      );
      
      return placesData2;
    }).then(placesData2 => console.log('placesData2', placesData2));
  }, []);

  const placesData = [
    {
      id: 1,
      name: 'Gdansk',
      coordinates: [54.3, 18.6],
    },
    {
      id: 2,
      name: 'Amsterdam',
      coordinates: [52.3, 4.89],
    },
  ];

  return (
    <GoogleMap defaultZoom={4} defaultCenter={{ lat: 52.3, lng: 4.89 }}>
      {placesData.map((place) => (
        <Marker
          key={place.id}
          position={{ lat: place.coordinates[0], lng: place.coordinates[1] }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MemoryMap() {
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
