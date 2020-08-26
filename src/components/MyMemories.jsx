import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../helpers/fetchData'

const MyMemories = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {
      setMemories(await fetchData('GET', '/memories/'));
    };
    getMemories();
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

export default MyMemories;
