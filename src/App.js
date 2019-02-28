import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import MoviesContainer from './containers/MoviesContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={Home} />
          <Route path='/movies' component={MoviesContainer} />        
        </div>
      </Router>
    );
  }
}

export default App;
