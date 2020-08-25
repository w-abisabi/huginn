import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Memory(props) {
  const [memory, setMemory] = useState();
  const id = props.match.params.id;
  let i = 0;

  useEffect(() => {
    const fetchMemory = async () => {
      const response = await fetch(`/.netlify/functions/api/memories/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const data = await response.json();
      // console.log('Data is here', data);
      setMemory(data);
    };
    fetchMemory();
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
              <p className="date">{memory.date}</p>
              <Link className="edit-btn" to={'/'} onClick={deleteMemory}>
              <i className="fas fa-trash"></i> DELETE
              </Link>
              <Link className="edit-btn" to={`/memory/edit/${memory._id}`}>
              <i className="fas fa-edit"></i> EDIT
              </Link>
              <h2 className="memory-ttl">{memory.title}</h2>
              <div>
                {memory.photos.map(photo => (
                  <img
                    className="artist-img-big"
                    src={photo}
                    alt="my memory"
                    key={`${id}_${i++}`} />
                ))}
              </div>
              <hr />
              <h3>{memory.city}</h3>
              <p>{memory.description}</p>
            </div>
          )
          : null}
        <Link className="back-btn" to={'/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
  );
}

export default Memory;
