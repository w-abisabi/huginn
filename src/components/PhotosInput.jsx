import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function PhotosInput({ photos, onAddPhoto}) {

  return (
    <div className="photos-input">
      {photos.length
        ? photos.map(photo => (
          <div key={uuidv4()}>
            <img src={photo} alt="memory" width="200px" />
            <i className="fas fa-minus-circle"></i>
          </div>
        ))
        : <p>Add a photo of your trip!</p>}
        <p>ADD NEW PICTURE</p>
        <input type="text" ></input>
        <button><i className="fas fa-plus-circle" /></button>
    </div>
  );
}

export default PhotosInput;