import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import MoviesContainer from './containers/MoviesContainer'
import MovieContainer from './containers/MovieContainer';
import UserContainer from './containers/UserContainer';
import EditUserForm from './forms/EditUserForm';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.props.auth.authenticated ? <Component {...props} /> : <Redirect to='/login' />
      )} />
    )

    return (
      <Router>
        <div className='App'>
          <NavComponent auth={this.props.auth} />
          <Route exact path='/movies' component={MoviesContainer} /> 
          <Route path='/movies/:id' component={MovieContainer} /> 
          <Route exact path='/users/:id' component={UserContainer} /> 
          <PrivateRoute path='/users/:id/edit' component={EditUserForm} />
          <PrivateRoute path='/reviews/:id/edit' component={EditReviewForm} />
          <Route path='/login' component={LoginForm} />        
          <Route path='/signup' component={RegistrationForm} />               
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.auth.user,
    review: state.review,
  }
}


export default App = connect(mapStateToProps, null)(App);
