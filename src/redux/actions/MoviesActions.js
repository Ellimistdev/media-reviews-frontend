import * as types from './ActionTypes'

export const fetchMovies = () => dispatch => {
      return fetch("http://localhost:3001/movies")
        .then(response => response.json())
        .then(movies =>
          dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: movies })
        )
    }