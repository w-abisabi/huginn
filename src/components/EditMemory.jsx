import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form2';

function Memory(props) {
  const id = props.match.params.id;

  return (
    <div>
      <div className="add-wrapper">
      <h2>Edit memory </h2>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <div className="form-add">
       {/* <Link className="cancel-link" to={`/memory/${id}`}>CANCEL</Link> */}
      <Form id={id} httpMethod={'PUT'} path={`memories/${id}`} historyPush={`/memory/${id}`} buttonText={'SAVE CHANGES'} />
      <Link className="back-btn" to={'/'}>
          <i className="fas fa-arrow-left"></i> BACK
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Memory;
