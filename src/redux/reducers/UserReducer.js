const initialState = {
  data: {},
  reviews: [],
  views: [],
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        data: action.user,
        reviews: action.user.reviews,
        views: action.user.views,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        data: action.user,
        reviews: action.user.reviews,
        views: action.user.views,
      };
    default:
      return state;
  }
}