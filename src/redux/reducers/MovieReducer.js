import * as types from '../../constants/ActionTypes';
const initialState = {
  movies: [],
  movie: {},
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    case types.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.movie,
        reviews: action.movie.reviews,
      };
    default:
      return state;
  }
}