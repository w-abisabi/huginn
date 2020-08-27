import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import PhotosInput from './PhotosInput';
import DropdownCountries from './DropdownCountries';
import fetchData from '../helpers/fetchData'
import { v4 as uuidv4 } from 'uuid';


function Memory(props) {
  const history = useHistory();
  const [memory, setMemory] = useState({
    date: '',
    title: '',
    photos: [],
    city: '',
    country: '',
    description: '',
    newPhoto: '',
  });
  // const [nPhoto, setNPhoto] = useState({})
  const id = props.match.params.id;

  function handleChange(e) {
    const value = e.target.value;
    setMemory({
      ...memory,
      [e.target.name]: value,
    });
  }

  function addPhoto() {
    const newArray = { ...memory, photos: [...memory.photos, memory.newPhoto] }
    console.log('newArray', newArray);
    setMemory(newArray);

    // const newPhoto = e.target.value;
    // console.log('newPhoto', newPhoto);
  }

  function deletePhoto() {
    // const newPhoto = e.target.value;
    // console.log('newPhoto', newPhoto);
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
    const response = await fetch(`/.netlify/functions/api/memories/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(memory),
      method: 'PUT',
    });
    console.log('RESPONSE', response)
    // if (respons)
    history.push(`/memory/${id}`);
  }

  return (
    <div>
      <h3>Edit Memory</h3> <Link className="cancel-link" to={`/memory/${id}`}>CANCEL</Link>
      <div className="memory">
        {/* <div>Date:</div><div contenteditable="true">{memory.date}</div> */}
        <form onSubmit={updateMemory}>
          <hr />
          <label>Date:
              <input type="date" defaultValue={memory.date} name="date" onChange={handleChange}></input>
          </label>
          <label>Title:
            <input type="text" defaultValue={memory.title} name="title" onChange={handleChange}></input>
          </label>
          <label>Description:
            <input type="text" defaultValue={memory.description} name="description" onChange={handleChange}></input>
          </label>
          {/* PHOTOS */}
          <div className="photos-input">
            {memory.photos.length
              ? memory.photos.map(photo => (
                <div key={uuidv4()}>
                  <img src={photo} alt="memory" width="200px" />
                  <i className="fas fa-minus-circle" onClick={deletePhoto}></i>
                </div>
              ))
              : <p>Add a photo of your trip!</p>}
            <label>ADD NEW PICTURE
              <input type="text" name="newPhoto" onChange={handleChange}></input>
              <button type="button" onClick={addPhoto}>
                <i className="fas fa-plus-circle" />
              </button>
            </label>
          </div>
          {/* <PhotosInput photos={memory.photos} onAddPhoto={addPhoto} /> */}
          <h3>Location:</h3>
          <DropdownCountries country={memory.country} onSelectCountry={handleChange} />
          <label>City:
            <input type="text" defaultValue={memory.city} name="city" onChange={handleChange}></input>
          </label>
          <hr />
          <button type="submit">SAVE CHANGES</button>
        </form>
      </div>
    </div>
  );
}

export default Memory;
