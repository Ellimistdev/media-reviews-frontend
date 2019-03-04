import * as types from '../../constants/ActionTypes'
import { USERS } from '../../constants/Routes'

export const fetchUser = id => dispatch => {
  return fetch(`${USERS}/${id}`)
    .then(response => response.json())
    .then(user =>
      dispatch({ type: types.FETCH_USER_SUCCESS, user: user })
    )
}

export const updateUser = user => dispatch => {
  const request = new Request(`${USERS}/${user.id}`, {
    method: 'PATCH',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({user: user})
  });

  return fetch(request)
    .then(response => response.json())
    .then(user =>
      dispatch({ type: types.UPDATE_USER_SUCCESS, user: user })
    )
}
