import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Memory(props) {
  const history = useHistory();
  const [memory, setMemory] = useState({
    date: '',
    title: '',
    photos: [],
    city: '',
    country: '',
    description: '',
  });
  const id = props.match.params.id;

  function handleChange(evt) {
    const value = evt.target.value;
    setMemory({
      ...memory,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [id]);

  const updateMemory = async (e) => {
    e.preventDefault();
    await fetch(`/.netlify/functions/api/memories/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(memory),
      method: 'PUT',
    });
    history.push('/');
  }

  return (
    <div>
      <h3>Edit Memory</h3> <Link className="cancel-link" to={`/memory/${id}`}>CANCEL</Link>
      <div className="memory">
        {/* <div>Date:</div><div contenteditable="true">{memory.date}</div> */}
        <form onSubmit={updateMemory}>
          <div>
            <label>Date: </label>
            <input type="text" defaultValue={memory.date} name="date" onChange={handleChange}></input>
          </div>
          <div>
            <label>Title: </label>
            <input type="text" defaultValue={memory.title} name="title" onChange={handleChange}></input>
          </div>
          <div>
            <label>Description: </label>
            <input type="text" defaultValue={memory.description} name="title" onChange={handleChange}></input>
          </div>
          <p>(photos here)</p>
          <h3>Location:</h3>
          <div>
            <label>Country: </label>
            <input type="text" defaultValue={memory.country} name="country" onChange={handleChange}></input>
          </div>
          <div>
            <label>City: </label>
            <input type="text" defaultValue={memory.city} name="city" onChange={handleChange}></input>
          </div>
          <button type="submit">SAVE CHANGES</button>
        </form>
        {/* <div>
          <p className="date">{memory.date}</p>
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
        </div> */}
      </div>
    </div>
  );
}

export default Memory;
