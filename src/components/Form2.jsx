import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DropdownCountries from './DropdownCountries';
import fetchData from '../helpers/fetchData';
import { v4 as uuidv4 } from 'uuid';

function Form({ id, httpMethod, path, historyPush, buttonText }) {
  const history = useHistory();

  //STATE
  const [memory, setMemory] = useState({
    country: '',
    city: '',
    description: '',
    title: '',
    photos: [],
    date: '',
  });

  //COMPONENT DID MOUNT
  useEffect(() => {
    const getMemory = async () => {
      if (id) {
        const fetchedMemory = await fetchData('GET', `memories/${id}`);
        setMemory(fetchedMemory[0]);
      }
    };
    getMemory();
  }, [id]);

  //SUBMITTING THE FORM
  const onSubFunction = async (e) => {
    e.preventDefault();
    const response = await fetch(`/.netlify/functions/api/${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(memory),
      method: httpMethod,
    });

    console.log('RESPONSE', response);
    history.push(historyPush);
  };

  //CHANGE FUNCTIONS
  function handleChange(e) {
    const value = e.target.value;
    setMemory({
      ...memory,
      [e.target.name]: value,
    });
  }

  function addPhoto() {
    const newArray = { ...memory, photos: [...memory.photos, memory.newPhoto] };
    setMemory(newArray);
  }

  function deletePhoto(e) {
    const index = parseInt(e.target.dataset.index);
    const newPhotoArray = memory.photos.filter((photo, i) => i !== index);
    const newArray = { ...memory, photos: newPhotoArray };
    setMemory(newArray);
  }

  //RENDER
  return (
    <form onSubmit={onSubFunction}>
      <hr />
      <label>
        Date:
        <input
          type="date"
          className="text-field"
          defaultValue={memory.date}
          name="date"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Title:
        <input
          type="text"
          className="text-field"
          defaultValue={memory.title}
          name="title"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Description:
        <textarea
          className="description-field"
          type="text"
          defaultValue={memory.description}
          name="description"
          onChange={handleChange}
        ></textarea>
      </label>
      {/* PHOTOS */}
      <div className="photos-input">
        {memory.photos.length ? (
          memory.photos.map((photo, i) => {
            return (
              <div key={uuidv4()}>
                <img src={photo} alt="memory" width="200px" />
                <i
                  className="fas fa-minus-circle"
                  data-index={i}
                  onClick={deletePhoto}
                ></i>
              </div>
            );
          })
        ) : (
          <p>Add a photo of your trip!</p>
        )}
          <label>
            Add new picture:
        <div>
            <input
              type="text"
              className="text-field-2"
              name="newPhoto"
              onChange={handleChange}
            ></input>
            <button className="add-i-btn" type="button" onClick={addPhoto}>
              <i className="fas fa-plus-circle" />
            </button>
        </div>
          </label>
      </div>
      <h3>Location:</h3>
      <DropdownCountries
        country={memory.country}
        onSelectCountry={handleChange}
      />
      <label >
        City:
        <input
          type="text"
          className="text-field"
          defaultValue={memory.city}
          name="city"
          onChange={handleChange}
        ></input>
        <div className="center">
        <button className="add-cover-btn-2" type="submit">
          <i className="fas fa-save"></i> {buttonText}
        </button>
        </div>
      </label>
    </form>
  );
}

export default Form;
