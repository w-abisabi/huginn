import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';

const Add = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: uuid(),
    city: "",
    lastName: "",
    description: "",
    title: "",
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const submitPlace = () => {
    dispatch(addPlace(id, city, description, title));
    history.push('/');
  };
  
  return (
    <div>
      <h2>Add a new place </h2>
      <div>
        <form onSubmit={submitPlace}>
          <label>
          city
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={handleChange}
            />
          </label>
          <label>
          description
            <input
              type="text"
              name="description"
              value={state.description}
              onChange={handleChange}
            />
          </label>
          <label>
          title
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
            />
          </label>
          <button  type="submit">
              SUBMIT
            </button>
        </form>
      </div>
    </div>
  );
};
export default Add;
