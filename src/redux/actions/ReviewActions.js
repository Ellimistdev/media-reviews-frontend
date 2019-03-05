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
    review: review,
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
    review: review,
  }
}

export const createReview = review => {
  const request = new Request(`${REVIEWS}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({review: review})
  });

  // why dispatch here?
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
        console.log(errors)
        dispatch(createFailure(errors))
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

  // why dispatch here?
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