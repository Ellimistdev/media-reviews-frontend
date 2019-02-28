export const fetchMovies = () => dispatch => {
      return fetch("http://localhost:3001/movies")
        .then(response => response.json())
        .then(movies =>
          dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: movies })
        )
    }