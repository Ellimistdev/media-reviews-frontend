import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchReview, deleteReview } from '../redux/actions/ReviewActions';

class ReviewComponent extends Component { 
  handleEdit = event => {
    let id = event.target.href.substr(event.target.href.lastIndexOf('/')+1);
    event.preventDefault();
    // since review components are often shown in a collection, 
    // when we intend to edit a review we need to fetch the 
    // particular review we want to edit and set it in the state.
    // this would ideally be intercepted by a service worker
    this.props.fetchReview(id)
      .then(response => {
        console.log(response);
      })
      .then(() =>{
        this.props.history.push(`/reviews/${id}/edit`);
      })
  }

  handleDelete = event => {
    let id = event.target.href.substr(event.target.href.lastIndexOf('/')+1);
    event.preventDefault();
    this.props.deleteReview(id)
      .then(response => {
        console.log(response);
      })
      .then(() =>{
        // redirect back?
        // do nothing? page may rerender on state update.
        // this.props.history.push(`/reviews/${id}/edit`);
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
      <React.Fragment>
        <Link to={`${review.id}`} onClick={this.handleEdit}>Edit</Link>
        <Link to={`${review.id}`} onClick={this.handleDelete}>Delete Review</Link>
      </React.Fragment>
    );

    const userReview = (
      <React.Fragment>
        <p>Movie: <Link to={`/movies/${review.movie_id}`}>{review.movie_title}</Link></p>
        <p>Review: {review.content}</p>
        <p>Rating: {review.rating}</p>
        <p>Last update: {review.updated_at}</p>
        { auth.authenticated && (auth.user.id === user.data.id) ? ownerAction : '' }
      </React.Fragment>
    );

    const movieReview = (
      <React.Fragment>
        <p>Review: {review.content}</p> 
        <p>Rating: {review.rating}</p> 
        <p>Reviewer: <Link to={`/users/${reviewer_id}`}>{reviewer_email}</Link></p>
        <p>Last update: {review.updated_at}</p>
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