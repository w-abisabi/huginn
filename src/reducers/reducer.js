import { combineReducers } from 'redux';



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
    // case 'EDIT_PLACE':
    //   return state.map(place => (
    //     (place.id === action.id)
    //     ? {
    //       ...place, 

    //     }
    //     : place
    //   ))
      default:
        return state;
  }
}

const rootReducer = combineReducers({
  places: placeReducer,
});

export default rootReducer;