import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../redux/actions/AuthActions';

class NavComponent extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const nonAuthNav = (
      <React.Fragment>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </React.Fragment>
    );

    const authNav = (
      <React.Fragment>
        <li><Link to={`/users/${this.props.auth.user.id}`}>Profile</Link></li>
        <li><Link to='/' onClick={this.handleLogout}>Logout</Link></li>
      </React.Fragment>
    );
  
    return (
      <nav>
        <ul>
          <li><Link to='/movies'>Movies</Link></li>
          {this.props.auth.authenticated ? authNav : nonAuthNav}
        </ul>
      </nav>
    );
  }
}


export default NavComponent = withRouter(connect(null, {logout})(NavComponent));