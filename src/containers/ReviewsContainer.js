import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewComponent from '../components/ReviewComponent';

class ReviewsContainer extends Component {
  render() {
    const { reviews, type, auth, user } = this.props;
    return (
      <React.Fragment>
        <h2>Reviews!</h2>
        <ul className='review-list'>
        {
          reviews.map(review => {
            return (
                <ReviewComponent key={review.id} user={user} review={review} auth={auth} type={type}/>
            )
          })
        }        
        </ul>
      </React.Fragment>
    )
  }  
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
  }
}

export default connect(mapStateToProps)(ReviewsContainer);