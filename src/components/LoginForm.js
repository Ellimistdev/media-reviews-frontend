import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authenticate } from '../redux/actions/AuthActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.authenticate(this.state)
    .then(response => {
      if (response.hasOwnProperty('errors')) {
        throw response.errors;
      } else {
        this.props.history.push('/user_profile')
        console.log('login returned true.')
      }
    })
    .catch(errors => {
      console.log('login returned false.')
      console.log(errors)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default LoginForm = withRouter(connect(null, { authenticate })(LoginForm));
