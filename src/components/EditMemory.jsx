import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DropdownCountries from './DropdownCountries';
import fetchData from '../helpers/fetchData'

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
    const getMemory = async () => {
      const fetchedMemory = await fetchData('GET', `memories/${id}`);
      console.log('memoryyyy', fetchedMemory);
      setMemory(fetchedMemory[0]);
    }
    getMemory();
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
    history.push(`/memory/${id}`);
  }

  return (
    <div>
      <h3>Edit Memory</h3> <Link className="cancel-link" to={`/memory/${id}`}>CANCEL</Link>
      <div className="memory">
        {/* <div>Date:</div><div contenteditable="true">{memory.date}</div> */}
        <form onSubmit={updateMemory}>
          <label>Date:
              <input type="date" defaultValue={memory.date} name="date" onChange={handleChange}></input>
          </label>
          <label>Title:
            <input type="text" defaultValue={memory.title} name="title" onChange={handleChange}></input>
          </label>
          <label>Description:
            <input type="text" defaultValue={memory.description} name="description" onChange={handleChange}></input>
          </label>
          <p>(photos here)</p>
          <h3>Location:</h3>
          <DropdownCountries country={memory.country} onSelectCountry={handleChange} />
          <label>City:
            <input type="text" defaultValue={memory.city} name="city" onChange={handleChange}></input>
          </label>
          <button type="submit">SAVE CHANGES</button>
        </form>
      </div>
    </div>
  );
}

export default Memory;
