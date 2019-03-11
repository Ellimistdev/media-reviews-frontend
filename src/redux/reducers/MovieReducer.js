import * as types from '../../constants/ActionTypes';
const initialState = {
  collection: [],
  current: {},
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        collection: action.collection,
      };
    case types.CREATE_MOVIE_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    case types.CREATE_MOVIE_SUCCESS:
      return {
        ...state,        
        collection: [...state.collection, action.current],
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        current: action.current,
      };
    default:
      return state;
  }
}