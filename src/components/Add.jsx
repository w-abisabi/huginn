import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPlace } from '../actions/actions';
import { useHistory } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    id: uuidv4(),
    city: "",
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
  const submitPlace = (e) => {
      e.preventDefault();
    dispatch(addPlace(state.id, state.city, state.description, state.title));
    history.push('/my-places');
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
