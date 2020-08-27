import React from 'react';
import { Link } from 'react-router-dom';

import Form from './Form2';

function Memory(props) {
  const id = props.match.params.id;

  return (
    <div>
      <h3>Edit Memory</h3> <Link className="cancel-link" to={`/memory/${id}`}>CANCEL</Link>
      <Form id={id} httpMethod={'PUT'} path={`memories/${id}`} historyPush={`/memory/${id}`} buttonText={'SAVE CHANGES'} />
    </div>
  );
}

export default Memory;
