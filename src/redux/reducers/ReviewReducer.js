import * as types from '../../constants/ActionTypes';
const initialState = {
  collection: [],
  current: {},
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {    
    case types.FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        current: action.current,
      }
      }
    case types.CREATE_REVIEW_FAILURE:
      return {
        ...state,
        errors: action.errors,
      }
    case types.UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        current: action.current,
      }
    case types.DELETE_REVIEW_SUCCESS:
      return {
       ...state,
       collection: state.collection.filter(review => action.id !== review.id)
      }
    case types.UPDATE_REVIEW_FAILURE:
    default:
      return state;
  }
}