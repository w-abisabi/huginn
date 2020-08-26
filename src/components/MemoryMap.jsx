import React, {useEffect,
   //useState
  } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import axios from 'axios';

function Map() {
  // const [placesData, setplacesData] = useState([]);

  const geocoder = () => {
    const location = 'Amsterdam';
    const REACT_APP_GOOGLE_MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: REACT_APP_GOOGLE_MAPS_API,
        },
      })
      .then(function (response) {
        // Log full response
        console.log("GEO RES", response);
        // const cooordinates = response.data.results[0].geometry.location
      })
      .catch(function (error) {
        console.log("GEO ERROR", error);
      });
      // return cooordinates
  };

  useEffect(() => {
    geocoder();
  //   setplacesData({
  //     placesData.map((place) => geocoder(place))
  //   });
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API}
        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

