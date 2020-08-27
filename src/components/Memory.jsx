import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'
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
  }

  return (
    <div>
      <div className="memory">
        {memory
          ? (
            <div>
              <Link className="edit-btn" to={'/'} onClick={deleteMemory}>
                <i className="fas fa-trash"></i> DELETE
              </Link>
              <Link className="edit-btn" to={`/memory/edit/${memory._id}`}>
                <i className="fas fa-edit"></i> EDIT
              </Link>
              <p className="date">{memory.date}</p>
              <h2 className="memory-ttl">{memory.title}</h2>
              <div>
                {memory.photos
                  ? memory.photos.map(photo => (
                    <img
                      className="artist-img-big"
                      src={photo}
                      alt="my memory"
                      key={uuidv4()} />))
                  : null}
              </div>
              <hr />
              <h3>{memory.city}, {memory.country}</h3>
              <p>{memory.description}</p>
            </div>
          )
          : null}
        <Link className="back-btn" to={memory ? `/city/${memory.city}` : '/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
  );
}

export default Memory;
