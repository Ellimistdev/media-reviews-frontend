import React, { Component } from 'react';
import { Link } from "react-router-dom";


class ReviewComponent extends Component { 
  render() {
    const { review, type } = this.props;
    const reviewType = type === 'user'
    let reviewer_id = '';
    let reviewer_email = '';
    if (review.reviewer) {
      reviewer_id = review.reviewer.id;      
      reviewer_email = review.reviewer.email;      
    }

    const userReview = (
        <React.Fragment>
          <p>Movie: <Link to={`/movies/${review.movie_id}`}>{review.movie_title}</Link></p>
          <p>Review: {review.content}</p>
          <p>Rating: {review.rating}</p> 
        </React.Fragment>
      );

    const movieReview = (
        <React.Fragment>
          <p>Review: {review.content}</p> 
          <p>Rating: {review.rating}</p> 
          <p>Reviewer: <Link to={`/users/${reviewer_id}`}>{reviewer_email}</Link></p> 
        </React.Fragment>
      );
    
    return (    
      <li className='review'>
        { reviewType ? userReview : movieReview }
      </li>
    );
  } 
}

export default ReviewComponent;