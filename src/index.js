import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  rootReducer  from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// const initialState = {
//   places: [
//     { 
//       id: 1,
//       city: 'Amsterdam',
//       description: 'This is a fun parade', 
//       title: 'Gay parade' 
//     }
//   ]
// }

const store = createStore(
  rootReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
