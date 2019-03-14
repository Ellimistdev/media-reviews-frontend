import * as types from '../../constants/ActionTypes'
import { VIEWS } from '../../constants/Routes'

const createFailure = errors => {
  return {
    type: types.CREATE_VIEW_FAILURE,
    errors: errors,
  }
}

const createSuccess = view => {
  return {
    type: types.CREATE_VIEW_SUCCESS,
    current: view,
  }
}

const deleteFailure = errors => {
  return {
    type: types.DELETE_VIEW_FAILURE,
    errors: errors,
  }
}

const deleteSuccessAuth = id => {
  return {
    type: types.DELETE_VIEW_SUCCESS_AUTH,
    id: id,
  }
}

const deleteSuccessUser = id => {
  return {
    type: types.DELETE_VIEW_SUCCESS_USER,
    id: id,
  }
}

export const deleteView = id => dispatch => {
  const request = new Request(`${VIEWS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
  });

  return fetch(request)
    .then(response => {
      if (response.status === 204) {
        let view_id = parseInt(id);
        dispatch(deleteSuccessAuth(parseInt(view_id)));
        dispatch(deleteSuccessUser(parseInt(view_id)));
        return response;
      } else {
        throw new Error('Failed to delete view');
      }      
    })
    .catch(errors => {
      console.log(errors);
      dispatch(deleteFailure(errors));
      return { errors: errors };
    })
}

export const createView = view => {
  const request = new Request(`${VIEWS}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({view: view}),
  });

  return dispatch => {
    return fetch(request)
      .then(response => {
        if (response.status === 201) {
          return response.json()
            .then(view => {
              console.log(view);
              return dispatch(createSuccess(view));
          });
        } else {
          throw new Error('Failed to create view');
        }      
      })
      .catch(errors => {
        console.log(errors);
        dispatch(createFailure(errors));
        return { errors: errors };
      })
  };
}
