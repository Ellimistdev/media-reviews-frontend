import React from 'react';
import { Link, withRouter } from "react-router-dom";

const UserComponent = props => {  
  return (
    <div className='user'> 
      <p>Email: {props.user.email} {props.auth.authenticated && (props.auth.user.id === props.user.id) ? <Link to={`/users/${props.user.id}/edit`}>Edit</Link> : '' }</p>
    </div>
  );
}

export default withRouter(UserComponent);