import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { fetchMovies } from '../redux/actions/MovieActions';
import CreateMovieForm from '../forms/CreateMovieForm';
import MovieComponent from '../components/MovieComponent';

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
      <React.Fragment>  
        { auth.authenticated ? addMovie : <p>Log in to add a movie!</p> }        
        <ul className='movie-list wrapper'>
          {movies.map(movie => (
            <li key={movie.id} className='movie-thumb'>
              <Link to={`/movies/${movie.id}`}>
                <MovieComponent movie={movie} />
              </Link>
            </li>
            ))}
        </ul>      
      </React.Fragment>  
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