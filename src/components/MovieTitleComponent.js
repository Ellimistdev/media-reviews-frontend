import React from 'react';

const MovieTitleComponent = props => {  
  return (
    props.type === 'show' ? 
      <h2 className='title'>{props.title}</h2> :
      <span className='title'>{props.title}</span>
  );
}

export default MovieTitleComponent;