import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyPlaces = () => {
  const [memories, setMemories] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/.netlify/functions/api/memories', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await response.json()
    setMemories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <div className="my-memories">
        <h2 className="my-memories">My Memories </h2>
        <hr/>
       
        {memories.length 
        ? memories.map(memory => (


            <div className="button_mem" align="center" key={memory._id}>
              <Link className="memory-link" to={`/memory/${memory._id}`}>{`${memory.city}, ${memory.country}`}</Link>
            </div>
          )) : <p>You don't have any memories yet.</p>}
      </div>
    );
}

export default MyPlaces;
