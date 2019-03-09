import { ADD_FAVORITE, DELETE_FAVORITE } from "../constants/action-types";

const initialState = {
  favorites: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE: {
      if (state.favorites.find(elem => elem.id === action.payload.id))
        return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    }
    case DELETE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload)
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
