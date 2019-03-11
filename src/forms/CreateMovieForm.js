import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createMovie } from '../redux/actions/MovieActions';
import ErrorComponent from '../components/ErrorComponent';

class CreateMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
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
    this.props.createMovie(this.state)
    .then(response => {
      if (response.hasOwnProperty('errors')) {
        throw response.errors;
      } else {
        this.props.history.push(`/movies/${response.current.id}`)
      }
    })
    .catch(errors => {
      this.setState({       
        errors: [errors.message]
      });
    })
  }

  render() {
    return (      
      <form onSubmit={this.handleSubmit}>
        <ErrorComponent errors={this.state.errors} />
        <label>
          Title:
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default CreateMovieForm = withRouter(connect(null, { createMovie })(CreateMovieForm));
