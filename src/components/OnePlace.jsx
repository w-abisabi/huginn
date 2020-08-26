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


  //   const deleteMemory = async () => {
  //     const deleted = await fetch(`/.netlify/functions/api/memories/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     });
  //     console.log(deleted);
  //   }

  return (
    <div className="memories-by-city">
      {memoriesByCity.length
        ? memoriesByCity.map(memory => (
          <div key={uuidv4()}>
            {/* <Link className="edit-btn" to={'/'} onClick={deleteMemory}>
                <i className="fas fa-trash"></i> DELETE 
              </Link>
              <Link className="edit-btn" to={`/memory/edit/${memory._id}`}>
                <i className="fas fa-edit"></i> EDIT 
              </Link> */}
            <p className="date">{memory.date}</p>
            <h2 className="memory-ttl">{memory.title}</h2>
            <img
              className="artist-img-big"
              src={memory.photos[0]}
              alt="my memory" />
              <Link className="back-btn" to={`/memory/${memory._id}`}>
              <i className="fas fa-eye"></i> SEE MORE
        </Link>
            <hr />
          </div>
        ))
        : <p>You have no memories in {city} yet</p>}
      <Link className="back-btn" to={'/'}>
        <i className="fas fa-arrow-left"></i> BACK
        </Link>
    </div>
  );
}

export default OnePlace;
