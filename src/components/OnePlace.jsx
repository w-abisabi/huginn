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
      <div className="center">
        <strong>{city}</strong>
        <div>
          <div className="style-seven"></div>
        </div>
      </div>
      {memoriesByCity.length ? (
        memoriesByCity.map((memory) => (
         
          <div className="mapped-place" key={uuidv4()} >
            <p className="date">{memory.date}</p>
            <div className="memory-ttl">{memory.title}</div>
            <img
              className="artist-img-big"
              src={memory.photos[0]}
              width="150px"
              alt="my memory"
            />
            <div className="center">

            <Link className="add-cover-btn-2" to={`/memory/${memory._id}`}>
            <i class="far fa-eye"></i> go to memory
            </Link>

            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <div className="filler-2">...</div>
      <Link className="back-btn-one" to={'/'}>
        <i className="fas fa-arrow-left"></i> BACK
      </Link>
      <div className="center">
        <div className="style-seven-2"></div>
      </div>
      <div className="home-center">
        <div className="huginn-logo"> </div>
        <p className="quote">
          "He sends them out in the morning to fly around the whole world, and by
          breakfast they are back again."
      </p>
      </div>
    </div>
  );
}

export default OnePlace;
