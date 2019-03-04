import React from 'react';
import { Link } from "react-router-dom";


const ReviewComponent = props => {  
  return (    
    <li className='review'>
      <p>Review: {props.review.content}</p>
      <p>Reviewer: <Link to={`/users/${props.review.reviewer.id}`}>{props.review.reviewer.email}</Link></p>
    </li>
  );
}

export default ReviewComponent;