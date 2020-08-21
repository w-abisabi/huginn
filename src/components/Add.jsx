import React, { useState } from 'react';
// import { addPlace } from '../actions/actions';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

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
      <h2>Add a new memory </h2>
      <div className="form-add">
        {/* <form onSubmit={submitMemory}>
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
        </form> */}

        <Form onSubmit={submitMemory}>
          

          <Form.Group controlId="title">
            <Form.Label>title</Form.Label>
            <Form.Control placeholder="Title" type="text" name="title" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>country</Form.Label>
            <Form.Control placeholder="country" type="text" name="country" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>city</Form.Label>
            <Form.Control placeholder="city" type="text" name="city" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control placeholder="description" type="text" name="description" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="photos">
            <Form.Label>photos</Form.Label>
            <Form.Control placeholder="photos" type="text" name="photos" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>date</Form.Label>
            <Form.Control placeholder="date" type="text" name="date" onChange={handleChange}/>
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>

        <Link className="back-btn" to={'/'}><i className="fas fa-arrow-left"></i> BACK</Link>
      </div>
    </div>
  );
};
export default Add;
