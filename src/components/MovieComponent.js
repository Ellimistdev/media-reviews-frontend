import React from 'react';

const MovieComponent = props => {  
  return (
    <div className='movie wrapper'> 
      <img className='poster' src={props.movie.poster_url} alt='movie poster' />
      <div className='data wrapper'>
        <span className='title'>{props.movie.title}</span>
      </div>
    </div>
  );
}

export default MovieComponent;