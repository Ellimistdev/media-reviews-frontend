import React, { Component } from 'react';
import './App.css';
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
          <Route path='/login' component={LoginForm} />        
          <Route path='/signup' component={RegistrationForm} />               
        </div>
      </Router>
    );
  }
}

export default App;
