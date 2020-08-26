import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'

const MyPlaces = () => {
  const [cities, setCities] = useState([]);

  useEffect( async () => {
    const data = await fetchData('GET', 'memories/cities');
    const parsedPlaces = await response.json(data)
    setCities(parsedPlaces);
  }, []);

  return (
    <div className="my-places">
      <h2 className="my-places">Where I've been </h2>
      <hr />

      {memories.length
        ? cities.map(city => (


          <div className="button_mem" align="center" key={memory._id}>
            <Link className="memory-link" to={`/memory/${memory._id}`}>{`${memory.city}, ${memory.country}`}</Link>
          </div>
        )) : <p>You don't have any memories yet.</p>}
    </div>
  );
}

export default MyPlaces;
