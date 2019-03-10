import * as types from '../../constants/ActionTypes'
import { REVIEWS } from '../../constants/Routes'

const updateFailure = errors => {
  return {
    type: types.UPDATE_REVIEW_FAILURE,
    errors: errors,
  }
}

const updateSuccess = review => {
  
  return {
    type: types.UPDATE_REVIEW_SUCCESS,
    current: review,
  }
}

const createFailure = errors => {
  return {
    type: types.CREATE_REVIEW_FAILURE,
    errors: errors,
  }
}

const createSuccess = review => {
  return {
    type: types.CREATE_REVIEW_SUCCESS,
    current: review,
  }
}

const deleteFailure = errors => {
  return {
    type: types.DELETE_REVIEW_FAILURE,
    errors: errors,
  }
}

const deleteSuccess = () => {
  return {
    type: types.DELETE_REVIEW_SUCCESS,
  }
}

export const fetchReview = id => dispatch => {
  return fetch(`${REVIEWS}/${id}`)
    .then(response => response.json())
    .then(review =>
      dispatch({ type: types.FETCH_REVIEW_SUCCESS, current: review })
    )
}

export const deleteReview = id => dispatch => {
  const request = new Request(`${REVIEWS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
  });

  return fetch(request)
    .then(response => {
      if (response.status === 204) {    
        dispatch(deleteSuccess());
        return response;
      } else {
        throw new Error('Failed to delete review');
      }      
    })
    .catch(errors => {
      console.log(errors);
      dispatch(deleteFailure(errors));
      return { errors: errors };
    })
}

export const createReview = review => {
  const request = new Request(`${REVIEWS}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({review: review}),
  });

  return dispatch => {
    return fetch(request)
      .then(response => {
        if (response.status === 201) {
          return response.json()
            .then(review => {
              console.log(review);
              return dispatch(createSuccess(review));
          });
        } else {
          throw new Error('Failed to create review');
        }      
      })
      .catch(errors => {
        console.log(errors);
        dispatch(createFailure(errors));
        return { errors: errors };
      })
  };
}

export const updateReview = review => {
  const request = new Request(`${REVIEWS}/${review.id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({review: review})
  });

  return dispatch => {
    return fetch(request)
      .then(response => {
        if (response.status === 200) {
          return response.json()
            .then(review => {
              console.log(review);
              return dispatch(updateSuccess(review));
          });
        } else {
          throw new Error('Failed to update review');
        }      
      })
      .catch(errors => {
        console.log(errors)
        dispatch(updateFailure(errors))
        return { errors: errors };
      })
  };
}