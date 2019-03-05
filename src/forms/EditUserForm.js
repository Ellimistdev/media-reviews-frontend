import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/UserActions';
import ErrorComponent from '../components/ErrorComponent';
import * as types from '../constants/ActionTypes'

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      id: this.props.user.id,
      password: ''
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
      if (response.type === types.UPDATE_USER_SUCCESS) {
        this.props.history.push(`/users/${response.user.id}`)
      } else {
        throw new Error('An Error occured while attempting to update the user record');
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
    const updateForm = (
      <form onSubmit={this.handleSubmit}>
        <ErrorComponent errors={this.state.errors} />
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

    const denyNotice = (
        <p> You do not have access to this page </p> 
      );

    return (   
      <div>
        {this.props.auth.authenticated && (this.props.auth.user.id === this.props.user.id) ? updateForm : denyNotice}
      </div>      
    );
  }
}

export default EditUserForm = withRouter(connect(null, { updateUser })(EditUserForm));
