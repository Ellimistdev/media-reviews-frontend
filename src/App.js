import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import MoviesContainer from './containers/MoviesContainer'
import MovieContainer from './containers/MovieContainer';
import UserContainer from './containers/UserContainer';
import EditUserForm from './forms/EditUserForm';
import LoginForm from './forms/LoginForm';
import RegistrationForm from './forms/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavComponent auth={this.props.auth} />
          <Route exact path='/movies' component={MoviesContainer} /> 
          <Route path='/movies/:id' component={MovieContainer} /> 
          <Route exact path='/users/:id' component={UserContainer} /> 
          <Route path='/users/:id/edit' render={() => <EditUserForm auth={this.props.auth} user={this.props.user} />} /> 
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
    user: state.auth.user
  }
}


export default App = connect(mapStateToProps, null)(App);
