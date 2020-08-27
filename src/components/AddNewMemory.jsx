import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form2';


const AddNewMemory = () => {
  

  return (
    <div>
      <h2>Add a new memory </h2>
      <div className="form-add">
        <Form httpMethod={'POST'} path={`memories/`} historyPush={'/'} buttonText={'SAVE'} />
        <Link className="back-btn" to={'/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
  );
};
export default AddNewMemory;

// PREVIOUS FORM
/* <Form onSubmit={submitMemory}>
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
</Form> */