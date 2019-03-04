import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchMovie } from '../redux/actions/MoviesActions';
// import ReviewsContainer from './ReviewsContainer';
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
        {/* <ReviewsContainer reviews={this.state.reviews} /> */}
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    movie: state.media.movie
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovie })(MovieContainer));