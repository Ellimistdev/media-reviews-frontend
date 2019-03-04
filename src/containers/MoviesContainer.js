import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchMovies } from '../redux/actions/MoviesActions';

class MoviesContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    if (this.props.movies.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <ul>
        {this.props.movies.map(movie => (
          <li key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>ID: {movie.id} | TMDB ID: {movie.tmdb_id}</p>
          </li>
          ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.media.movies
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MoviesContainer));