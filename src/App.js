import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MoviesContainer from './containers/MoviesContainer'
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav isAuthenticated={this.props.isAuthenticated} />
          <Route exact path='/movies' component={MoviesContainer} /> 
          <Route path='/login' component={LoginForm} />        
          <Route path='/signup' component={RegistrationForm} />               
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}


export default App = connect(mapStateToProps, null)(App);
