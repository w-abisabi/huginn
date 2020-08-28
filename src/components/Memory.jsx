import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData';
import { v4 as uuidv4 } from 'uuid';

function Memory(props) {
  const [memory, setMemory] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    const getMemory = async () => {
      const fetchedMemory = await fetchData('GET', `memories/${id}`);
      setMemory(fetchedMemory[0]);
    };
    getMemory();
  }, [id]);

  const deleteMemory = async () => {
    const deleted = await fetch(`/.netlify/functions/api/memories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log(deleted);
  };

  return (
    <div>
      <div className="memory">
        {memory ? (
          <div>
            
            <p className="date">{memory.date}</p>
            <h2 className="memory-ttl">{memory.title}</h2>
            <div>
              {memory.photos
                ? memory.photos.map((photo) => (
                    <img
                      className="artist-img-big"
                      src={photo}
                      alt="my memory"
                      width="300px"
                      key={uuidv4()}
                    />
                  ))
                : null}
            </div>
            {/* <div className="center">
              <div className="style-seven"></div>
            </div> */}
            <h2 classNeme="give-it-a-blue">
           


              {memory.city}, {memory.country}
  
            </h2>
            <p>{memory.description}</p>
            <div className="separator">
            <Link className="delete-btn" to={'/'} onClick={deleteMemory}>
              <i className="fas fa-trash"></i> DELETE
            </Link>
            <Link className="edit-btn" to={`/memory/edit/${memory._id}`}>
              <i className="fas fa-edit"></i> EDIT
            </Link>
            </div>
          </div>
        ) : null}
        <div> 
        <Link className="back-btn-one" to={memory ? `/city/${memory.city}` : '/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
        <div className="center">
        <div className="style-seven"></div>
      </div>
        <div className="home-center">
        <div className="huginn-logo"> </div>
        <p className="quote">
          "He sends them out in the morning to fly around the whole world, and
          by breakfast they are back again."
        </p>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Memory;
