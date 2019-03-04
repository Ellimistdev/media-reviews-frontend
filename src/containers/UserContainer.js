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
    if (Object.entries(this.props.user).length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <div className='user-container'>
        <UserComponent user={this.props.user} auth={this.props.auth} />
        <ReviewsContainer reviews={this.props.reviews} type={'user'}/>
        <ViewsContainer views={this.props.views} />
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    reviews: state.user.reviews,
    views: state.user.views,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchUser })(UserContainer));