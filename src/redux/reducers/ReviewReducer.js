import * as types from '../../constants/ActionTypes';

const initialState = {
  reviews: [],
  review: {},
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.review,
        reviews: [...state.reviews, action.review],
      }
    case types.CREATE_REVIEW_FAILURE:
      return {
        ...state,
        errors: action.errors,
      }
    case types.UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.review,
        reviews: [...state.reviews, action.review],
      }
    case types.UPDATE_REVIEW_FAILURE:
    default:
      return state;
  }
}