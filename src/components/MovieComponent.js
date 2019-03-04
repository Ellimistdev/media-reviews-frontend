import React from 'react';

const MovieComponent = props => {  
  return (
    <div className='movie'> 
      <p>Title: {props.movie.title}</p>
      <p>ID: {props.movie.id} | TMDB ID: {props.movie.tmdb_id}</p>
    </div>
  );
}

export default MovieComponent;