export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return action.payload
    default:
      return state;
  }
}