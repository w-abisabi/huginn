import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Memory(props) {
  const [memory, setMemory] = useState({});
  const id = props.match.params.id;

  const fetchData = async () => {
    const response = await fetch(`/.netlify/functions/api/memories/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    console.log('Data is here', data);
    setMemory(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="memory">
      <p className="date">{memory.date}</p>
        <h2 className="memory-ttl">{memory.title}</h2>
        <div>
        <img
            className="artist-img-big"
            src={memory.photos}
            alt="photo from memory" />
        </div>
        <hr/>
       
        <h3>{memory.city}</h3>
        <p>{memory.description}</p>
       
        

        <Link className="back-btn" to={'/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
  );
}

export default Memory;
