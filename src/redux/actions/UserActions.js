import * as types from '../../constants/ActionTypes'
import { USERS } from '../../constants/Routes'

export const fetchUser = id => dispatch => {
      return fetch(`${USERS}/${id}`)
        .then(response => response.json())
        .then(user =>
          dispatch({ type: types.FETCH_USER_SUCCESS, user: user })
        )
    }
