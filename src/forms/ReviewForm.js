import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createReview } from '../redux/actions/ReviewActions';
import ErrorComponent from '../components/ErrorComponent';
import * as types from '../constants/ActionTypes';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: this.props.movie.id,
      user_id: this.props.user.id,
      content: '',
      rating: '',
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
    this.props.createReview(this.state)
    .then(response => {
      if (response.type === types.CREATE_REVIEW_SUCCESS) {        
        this.props.history.push(`/movies/${response.current.movie.id}`)
        console.log('review created!')
      } else {
        throw new Error('An Error occured while attempting to create the review');
      }
    })
    .catch(errors => {
      console.log('create review failed.')
      this.setState({       
        errors: [errors.message]
      });
      console.log(this.state.errors)
    })
  }

  render() {
    return (      
      <form onSubmit={this.handleSubmit}>
        <ErrorComponent errors={this.state.errors} />
        <label>
          Content:
          <input type='text' name='content' value={this.state.content} onChange={this.handleChange} />
        </label>
        <label>
          Rating:
          <select name='rating' value={this.state.rating} onChange={this.handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <input type='submit' value='Add Review!' />
      </form>
    );
  }
}

export default ReviewForm = withRouter(connect(null, { createReview })(ReviewForm));
