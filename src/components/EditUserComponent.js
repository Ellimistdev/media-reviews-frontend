import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/UserActions';
import ErrorMessage from './ErrorMessage';

class EditUserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      id: this.props.user.id,
      password: '',
      errors: [],
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
    this.props.updateUser(this.state)
    .then(response => {
      if (response.hasOwnProperty('errors')) {
        throw response.errors;
      } else {
        this.props.history.push(`/users/${response.user.id}`)
        console.log('update returned true.')
      }
    })
    .catch(errors => {
      console.log('update returned false.')
      this.setState({       
        errors: [errors.message]
      });
      console.log(this.state.errors)
    })
  }

  render() {
    return (      
      <form onSubmit={this.handleSubmit}>
        <ErrorMessage errors={this.state.errors} />
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

export default EditUserComponent = withRouter(connect(null, { updateUser })(EditUserComponent));
