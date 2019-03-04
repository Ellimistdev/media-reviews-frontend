import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { fetchMovies } from '../redux/actions/MovieActions';

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
            <h4>Title:<Link to={`/movies/${movie.id}`}>{movie.title}</Link></h4>
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