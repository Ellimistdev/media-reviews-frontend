import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchUser } from '../redux/actions/UserActions';
import ReviewsContainer from './ReviewsContainer';
import ViewsContainer from './ViewsContainer';
import UserComponent from '../components/UserComponent';

class UserContainer extends Component {  
  componentDidMount() {
    this.props.fetchUser(this.props.match.params['id']);
  }
  
  render() {
    const { reviews, views, auth, user } = this.props;
    if (Object.entries(this.props.user).length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='user-container'>
        <UserComponent user={user} auth={auth} />
        <ReviewsContainer reviews={reviews} type={'user'}/>
        <ViewsContainer views={views} />
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    reviews: state.reviews.collection,
    views: state.user.views,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchUser })(UserContainer));