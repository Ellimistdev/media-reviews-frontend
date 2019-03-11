import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { fetchMovies } from '../redux/actions/MovieActions';
import CreateMovieForm from '../forms/CreateMovieForm';

class MoviesContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, auth } = this.props;
    const addMovie = (      
      <React.Fragment>        
        <h2>Add a movie</h2> <CreateMovieForm /> 
      </React.Fragment>
    );

    if (movies.length === 0) {
      return <h1>Loading...</h1>
    }
    
    return (
      <ul>
        { auth.authenticated ? addMovie : <p>Log in to add a movie!</p> }        
        {movies.map(movie => (
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
    movies: state.movies.collection,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MoviesContainer));