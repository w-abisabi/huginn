import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData';
import { v4 as uuidv4 } from 'uuid';

function OnePlace(props) {
  const [memoriesByCity, setMemoriesByCity] = useState([]);
  const city = props.match.params.city;

  useEffect(() => {
    const getOnePlace = async () => {
      setMemoriesByCity(await fetchData('GET', `/memories/cities/${city}`));
    };
    getOnePlace();
  }, [city]);

  return (
    <div className="memories-by-city">
      <h2>My memories in <strong>{city}</strong> </h2>
      {memoriesByCity.length
        ? memoriesByCity.map(memory => (
          <div key={uuidv4()}>
            
            <p className="date">{memory.date}</p>
            <h2 className="memory-ttl">{memory.title}</h2>
            <img
              className="artist-img-big"
              src={memory.photos[0]}
              width="150px"
              alt="my memory" />
              <Link className="back-btn" to={`/memory/${memory._id}`}>
              <i className="fas fa-eye">SEE MORE</i> 
        </Link>
            <hr />
          </div>
        ))
        : <p>Loading...</p>}
      <Link className="back-btn" to={'/'}>
        <i className="fas fa-arrow-left"></i> BACK
        </Link>
    </div>
  );
}

export default OnePlace;
