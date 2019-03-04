import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MoviesContainer from './containers/MoviesContainer'
import MovieContainer from './containers/MovieContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav authenticated={this.props.authenticated} />
          <Route exact path='/movies' component={MoviesContainer} /> 
          <Route path='/movies/:id' component={MovieContainer} /> 
          <Route path='/login' component={LoginForm} />        
          <Route path='/signup' component={RegistrationForm} />               
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    // user: state.auth.currentUser
  }
}


export default App = connect(mapStateToProps, null)(App);
