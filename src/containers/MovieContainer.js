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
    if (Object.entries(this.props.movie).length === 0) {
      return <h1>Loading...</h1>
    }    
    return (
      <div className='movie-container'>
        <MovieComponent movie={this.props.movie} />
        <ReviewsContainer reviews={this.props.movie.reviews} type={'movie'}/>
        { this.props.auth.authenticated ? <ReviewForm movie={this.props.movie} user={this.props.auth.user}/> : <p>Log in to add a review!</p> }
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    movie: state.media.movie,
    reviews: state.media.reviews,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovie })(MovieContainer));