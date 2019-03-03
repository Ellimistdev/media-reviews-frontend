import * as types from '../../constants/ActionTypes'
import { MOVIES } from '../../constants/Routes'

export const fetchMovies = () => dispatch => {
      return fetch(MOVIES)
        .then(response => response.json())
        .then(movies =>
          dispatch({ type: types.FETCH_MOVIES_SUCCESS, payload: movies })
        )
    }