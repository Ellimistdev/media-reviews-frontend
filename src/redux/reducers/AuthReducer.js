import * as types from '../../constants/ActionTypes';

const initialState = {
  authenticated: false,
  authenticating: false,
  user: {},
  token: null,
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        authenticating: true
      }
    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authenticated: true,
        authenticating: false,
        user: action.user,
        token: action.token
      }
    case types.AUTHENTICATION_FAILURE:
      return {
        authenticated: false,
        authenticating: false,
        user: {},
        token: null,
        errors: action.errors || []
      }
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}