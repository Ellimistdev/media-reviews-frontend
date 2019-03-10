import * as types from '../../constants/ActionTypes'
import { MOVIES } from '../../constants/Routes'

export const fetchMovies = () => dispatch => {
      return fetch(MOVIES)
        .then(response => response.json())
        .then(movies =>
          dispatch({ type: types.FETCH_MOVIES_SUCCESS, collection: movies })
        )
    }
    
export const fetchMovie = id => dispatch => {
      return fetch(`${MOVIES}/${id}`)
        .then(response => response.json())
        .then(movie =>
          dispatch({ type: types.FETCH_MOVIE_SUCCESS, current: movie })
        )
    }
