import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchMovie } from '../redux/actions/MovieActions';
import { fetchReviews } from '../redux/actions/ReviewActions';
import ReviewForm from '../forms/ReviewForm';
import ReviewsContainer from './ReviewsContainer';
import MovieComponent from '../components/MovieComponent';

class MovieContainer extends Component {
  
  componentDidMount() {
    let id = this.props.match.params['id'];
    this.props.fetchReviews(id, 'movie');
    this.props.fetchMovie(id);
  }

  render() {
    const { movie, auth, reviews } = this.props;
    if (Object.entries(this.props.movie).length === 0) {
      return <h1>Loading...</h1>
    }    
    return (
      <div className='movie-container'>
        <div className='movie-data wrapper'>
          <MovieComponent movie={movie} type={'show'} auth={auth} />
        </div>
        <ReviewsContainer reviews={reviews} type={'movie'}/>
        { auth.authenticated ? <ReviewForm movie={movie} user={auth.user}/> : <p>Log in to add a review!</p> }
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    movie: state.movies.current,
    user: state.user,
    auth: state.auth,
    reviews: state.reviews.collection,
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovie, fetchReviews })(MovieContainer));