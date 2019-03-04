import React, { Component } from 'react';
import ReviewComponent from '../components/ReviewComponent';

class ReviewsContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Reviews!</h2>
        <ul className='review-list'>
        {
          this.props.reviews.map(review => {
            return (
                <ReviewComponent key={review.id} review={review} type={this.props.type}/>
            )
          })
        }        
        </ul>
      </React.Fragment>
    )
  }  
}

export default ReviewsContainer;