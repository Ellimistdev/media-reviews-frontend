import React from 'react';

const UserComponent = props => {  
  return (
    <div className='user'> 
      <p>Email: {props.user.email}</p>
    </div>
  );
}

export default UserComponent;