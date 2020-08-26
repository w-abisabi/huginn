import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MemoryMap() {
// eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 52.3727,
    lng: 4.8931,
  };

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);


  const GOOGLE_MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MemoryMap);
