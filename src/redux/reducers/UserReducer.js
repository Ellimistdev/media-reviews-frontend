import * as types from '../../constants/ActionTypes';

const initialState = {
  id: null,
  email: '',
  views: [],
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        id: action.user.id,
        email: action.user.email,
        views: action.user.views,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        id: action.user.id,
        email: action.user.email,
        views: action.user.views,
      };
    case types.UPDATE_USER_FAILURE:
      return {
        ...state,
        errors: action.errors || []
      };
    default:
      return state;
  }
}