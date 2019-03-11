import * as types from '../../constants/ActionTypes'
import { MOVIES } from '../../constants/Routes'

const createMovieFailure = errors => {
  return {
    type: types.CREATE_MOVIE_FAILURE,
    errors: errors,
  }
}

const createMovieSuccess = movie => {
  return {
    type: types.CREATE_MOVIE_SUCCESS,
    current: movie,
  }
}

const fetchMovieFailure = errors => {
  return {
    type: types.FETCH_MOVIE_FAILURE,
    errors: errors,
  }
}

const fetchMovieSuccess = movie => {
  return {
    type: types.FETCH_MOVIE_SUCCESS,
    current: movie,
  }
}

const fetchCollectionFailure = errors => {
  return {
    type: types.FETCH_MOVIES_FAILURE,
    errors: errors,
  }
}

const fetchCollectionSuccess = movies => {
  return {
    type: types.FETCH_MOVIES_SUCCESS,
    collection: movies,
  }
}

export const fetchMovies = () => dispatch => {
  return fetch(MOVIES)
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(movies =>
          dispatch(fetchCollectionSuccess(movies))
        )
      } else {
        throw new Error('Failed to fetch movie collection');
      }        
  })
  .catch(errors => {
    console.log(errors);
    dispatch(fetchCollectionFailure(errors));
    return { errors: errors };
  })
}
    
export const fetchMovie = id => dispatch => {
  return fetch(`${MOVIES}/${id}`)
  .then(response => {
    if (response.status === 200) {
      response.json()
      .then(movie =>
        dispatch(fetchMovieSuccess(movie))
      )
    } else {
      throw new Error('Failed to fetch movie');
    }        
  })
  .catch(errors => {
    console.log(errors);
    dispatch(fetchMovieFailure(errors));
    return { errors: errors };
  })      
}

export const createMovie = movie => dispatch => {
  const request = new Request(`${MOVIES}`, {
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({movie: movie}),
  });

  return fetch(request)
    .then(response => {
      if (response.status === 201) {
        return response.json()
          .then(movie => {
            console.log(movie);
            return dispatch(createMovieSuccess(movie));
        });
      } else {
        throw new Error('Failed to create movie');
      }      
    })
    .catch(errors => {
      console.log(errors);
      dispatch(createMovieFailure(errors));
      return { errors: errors };
    })
}