import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Memory() {
  const [memory, setMemory] = useState({});
  const id = '5f3e991eaf3c6c5e01723a36';

  const fetchData = async () => {
    const response = await fetch(`/.netlify/functions/api/memories/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const data = await response.json()
    console.log('Data is here', data);
    setMemory(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="memory">
      <p>Memory!!</p>
      {/* <p>{username}</p>
		<p>{city}</p>
		<p>{description}</p>
		<p>{title}</p> */}
      <li><Link to="/">Back</Link></li>
    </div>
  );
}

export default Memory;