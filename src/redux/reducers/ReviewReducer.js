import * as types from '../../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {    
    case types.FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.review,
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
      }
    case types.DELETE_REVIEW_SUCCESS:
      return {
       ...state,
      //  reviews:
      }
    case types.UPDATE_REVIEW_FAILURE:
    default:
      return state;
  }
}