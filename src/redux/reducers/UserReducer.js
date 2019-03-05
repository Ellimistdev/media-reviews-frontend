import * as types from '../../constants/ActionTypes';

const initialState = {
  data: {},
  reviews: [],
  views: [],
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.user,
        reviews: action.user.reviews,
        views: action.user.views,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        data: action.user,
        reviews: action.user.reviews,
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