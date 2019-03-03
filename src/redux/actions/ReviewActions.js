import { REVIEWS } from '../../constants/Routes'

export const createReview = review => {
  return dispatch => {
    return fetch(`${REVIEWS}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({review: review})
    })
      .then(response => response.json())
      .then(review => {
        console.log(review);
        // dispatch(addReview(review))
        // dispatch(resetReviewForm())
      })
      .catch(error => console.log(error))
  };
}