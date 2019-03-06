import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchMovie } from '../redux/actions/MovieActions';
import ReviewForm from '../forms/ReviewForm';
import ReviewsContainer from './ReviewsContainer';
import MovieComponent from '../components/MovieComponent';

class MovieContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params['id']);
  }

  render() {
    const { movie, auth } = this.props;
    if (Object.entries(this.props.movie).length === 0) {
      return <h1>Loading...</h1>
    }    
    return (
      <div className='movie-container'>
        <MovieComponent movie={movie} />
        <ReviewsContainer reviews={movie.reviews} type={'movie'}/>
        { auth.authenticated ? <ReviewForm movie={movie} user={auth.user}/> : <p>Log in to add a review!</p> }
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    movie: state.media.movie,
    user: state.user,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovie })(MovieContainer));