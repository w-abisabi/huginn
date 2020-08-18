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

const placeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [
        ...state,
        {
          id: action.id, 
          city: action.city, 
          description: action.description,
          title: action.title
        }
      ]
    case 'EDIT_PLACE':
      return state.map(place => (
        (place.id === action.id)
        ? {
          ...place, 

        }
        : place
      ))
  }
}

const rootReducer = combineReducers({
  
});

export default rootReducer;