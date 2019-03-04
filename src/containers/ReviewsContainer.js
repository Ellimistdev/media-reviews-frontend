import React, { Component } from 'react';
import ReviewComponent from '../components/ReviewComponent';

class ReviewsContainer extends Component {
  render() {
    return (
      <ul className='review-list'>
      {
        this.props.reviews.map(review => {
          return (
              <ReviewComponent key={review.id} review={review} />
          )
        })
      }        
      </ul>
    )
  }  
}

export default ReviewsContainer;