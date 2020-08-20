import React, { useState } from 'react';
// import { addPlace } from '../actions/actions';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Add = () => {
  // const history = useHistory();

  const [newMemory, setNewMemory] = useState({
    country: '',
    city: '',
    description: '',
    title: '',
    photos: [],
    date: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setNewMemory({
      ...newMemory,
      [evt.target.name]: value,
    });
  }
  const submitMemory = async (e) => {
    e.preventDefault();
    //const response =
    await fetch('/.netlify/functions/api/places', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newMemory),
      // httpMethod:
      method: 'POST',
    });
  };

  return (
    <div>
      <h2>Add a new place </h2>
      <div>
        <form onSubmit={submitMemory}>
          <label>
            title
            <input type="text" name="title" onChange={handleChange} />
          </label>
          <label>
            country
            <input type="text" name="country" onChange={handleChange} />
          </label>
          <label>
            city
            <input type="text" name="city" onChange={handleChange} />
          </label>
          <label>
            description
            <input type="text" name="description" onChange={handleChange} />
          </label>
          <label>
            photos
            <input type="text" name="photos" onChange={handleChange} />
          </label>
          <label>
            date
            <input type="text" name="date" onChange={handleChange} />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
        <Link to={'/'}>BACK</Link>
      </div>
    </div>
  );
};
export default Add;
