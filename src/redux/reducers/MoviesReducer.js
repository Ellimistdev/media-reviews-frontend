const initialState = {
  movies: [],
  movie: {},
  reviews: [],
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.movies,
      };
    case "FETCH_MOVIE_SUCCESS":
      return {
        ...state,
        movie: action.movie,
        reviews: action.movie.reviews,
      };
    default:
      return state;
  }
}