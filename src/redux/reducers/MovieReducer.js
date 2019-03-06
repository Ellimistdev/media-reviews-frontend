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
      };
    // This action lives here so that the review is added to the movie show page when created.
    case types.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          reviews: [...state.movie.reviews, action.review],
        }
      }
    default:
      return state;
  }
}