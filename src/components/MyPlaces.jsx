import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'
import { v4 as uuidv4 } from 'uuid';

const MyPlaces = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      setCities(await fetchData('GET', '/memories/cities'));
    };
    getCities();
  }, []);

  return (
    <div className="my-places">
      <h2>I have been here</h2>

      {cities.length
        ? cities.map(city => (
          <div className="button_mem" align="center" key={uuidv4()}>
            <Link className="memory-link" to={`/city/${city}`}>{city}</Link>
          </div>

          // <div className="button_mem" align="center" key={memory._id}>
          //   <Link className="memory-link" to={`/memory/${memory._id}`}>{`${memory.city}, ${memory.country}`}</Link>
          // </div>
        )) : <p>Add some nice memories!</p>}
    </div>
  );
}

export default MyPlaces;
