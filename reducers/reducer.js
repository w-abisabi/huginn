import { combineReducers } from 'redux';

const initialState = {
  places: [
    { 
      id: 1,
      city: 'Amsterdam',
      description: 'This is a fun parade', 
      title: 'Gay parade' 
    }
  ]
}

const rootReducer = combineReducers({
  
});

export default rootReducer;