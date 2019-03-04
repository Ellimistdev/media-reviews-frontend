import React from 'react';
import { Link } from "react-router-dom";


const ViewComponent = props => {  
  return (    
    <li className='view'>
      <p>Viewed <Link to={`/movies/${props.view.movie_id}`}>{props.view.title}</Link> on {props.view.created_at}</p>
    </li>
  );
}

export default ViewComponent;