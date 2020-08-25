import React, { useState } from 'react';
// import { addPlace } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownCountries from './DropdownCountries';

const AddNewMemory = () => {
  const history = useHistory();

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
    await fetch('/.netlify/functions/api/memories', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newMemory),

      method: 'POST',
    });
    history.push('/');
  };

  return (
    <div>
      <h2>Add a new memory </h2>
      <div className="form-add">
        <Form onSubmit={submitMemory}>
          <Form.Group controlId="title">
            <Form.Label>title</Form.Label>
            <Form.Control
              placeholder="Title"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="country">
            <DropdownCountries onSelectCountry={handleChange} />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>city</Form.Label>
            <Form.Control
              placeholder="city"
              type="text"
              name="city"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              placeholder="description"
              type="text"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="photos">
            <Form.Label>photos</Form.Label>
            <Form.Control
              placeholder="photos"
              url="text"
              name="photos"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>

        <Link className="back-btn" to={'/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
  );
};
export default AddNewMemory;