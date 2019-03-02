import * as types from './actionTypes'

export const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

export const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

export const authFailure = errors => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}
