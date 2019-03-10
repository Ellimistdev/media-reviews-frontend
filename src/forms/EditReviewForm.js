import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchReview, updateReview } from '../redux/actions/ReviewActions';
import ErrorComponent from '../components/ErrorComponent';
import * as types from '../constants/ActionTypes';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.review.content,
      rating: this.props.review.rating,
      id: this.props.review.id,
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
    this.props.updateReview(this.state)
    .then(response => {
      if (response.type === types.UPDATE_REVIEW_SUCCESS) {
        this.props.history.push(`/users/${response.current.reviewer.id}`)
        console.log('review updated!')
      } else {
        throw new Error('An Error occured while attempting to update the review');
      }
    })
    .catch(errors => {
      console.log('update review failed.')
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
        <input type='submit' value='Update Review!' />
      </form>
    );

    const denyNotice = (
        <p> You do not have access to this page </p>
      );

    return (
      <div>
        <h2>Edit review for {this.props.review.movie.title}</h2>
        { (this.props.auth.user.id === this.props.review.reviewer.id) ? updateForm : denyNotice}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    review: state.reviews.current,
    user: state.user,
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, { fetchReview, updateReview })(EditReviewForm));
