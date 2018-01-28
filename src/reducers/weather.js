import { FETCH_WEATHER } from "../actions/index";

function weatherReducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
     if(!action.payload.data){
       alert('No weather data found');
       return [...state]
     }
      return [action.payload.data,...state];
    default:
      return state;
  }
}

export default weatherReducer;
