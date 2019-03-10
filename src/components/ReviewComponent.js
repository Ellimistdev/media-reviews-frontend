import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchReview } from '../redux/actions/ReviewActions';

class ReviewComponent extends Component { 
  loadEdit = event => {
    let id = event.target.href.substr(event.target.href.lastIndexOf('/')+1);
    event.preventDefault();
    this.props.fetchReview(id)
      .then(response => {
        console.log(response);
      })
      .then(() =>{
        this.props.history.push(`/reviews/${id}/edit`);
      })
  }

  render() {
    const { review, type, auth, user } = this.props;
    const reviewType = type === 'user'
    let reviewer_id = '';
    let reviewer_email = '';
    if (review.reviewer) {
      reviewer_id = review.reviewer.id;      
      reviewer_email = review.reviewer.email;      
    }

    const ownerAction = (
      <Link to={`${review.id}`} onClick={this.loadEdit}>Edit</Link>
    );

    const userReview = (
      <React.Fragment>
        <p>Movie: <Link to={`/movies/${review.movie_id}`}>{review.movie_title}</Link></p>
        <p>Review: {review.content}</p>
        <p>Rating: {review.rating}</p>         
        { auth.authenticated && (auth.user.id === user.data.id) ? ownerAction : '' }
      </React.Fragment>
    );

    const movieReview = (
      <React.Fragment>
        <p>Review: {review.content}</p> 
        <p>Rating: {review.rating}</p> 
        <p>Reviewer: <Link to={`/users/${reviewer_id}`}>{reviewer_email}</Link></p>
        { auth.authenticated && (auth.user.id === reviewer_id) ? ownerAction : '' }
      </React.Fragment>
    );
    
    return (    
      <li className='review'>
        { reviewType ? userReview : movieReview }
      </li>
    );
  } 
}

export default withRouter(connect(null, { fetchReview })(ReviewComponent));