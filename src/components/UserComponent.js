import React from 'react';
import { Link, withRouter } from "react-router-dom";

const UserComponent = props => {  
  const { auth, user } = props;

  return (
    <div className='user'> 
      <p>Email: {user.email} {auth.authenticated && (auth.user.id === user.id) && <Link to={`/users/${user.id}/edit`}>Edit</Link>}</p>
    </div>
  );
}

export default withRouter(UserComponent);