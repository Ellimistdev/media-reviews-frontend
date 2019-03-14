import React from 'react';
import MovieTitleComponent from './MovieTitleComponent';
import MovieDataComponent from './MovieDataComponent';
import NewViewForm from '../forms/NewViewForm';

const MovieComponent = props => {  
  return (
    <div className='movie wrapper'> 
      <img className='poster' src={props.movie.poster_url} alt='movie poster' />
      <div className='data wrapper'>
        <MovieTitleComponent type={props.type} title={props.movie.title} />
        {props.type === 'show' && <MovieDataComponent movie={props.movie} /> }
        {props.type === 'show' && props.auth.authenticated && <NewViewForm movie={props.movie} user={props.auth.user} /> }
      </div>
    </div>
  );
}

export default MovieComponent;