import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createView } from '../redux/actions/ViewActions';
import ErrorComponent from '../components/ErrorComponent';

class NewViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: this.props.movie.id,
      user_id: this.props.user.id,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createView(this.state)
    .then(response => {
      if (response.hasOwnProperty('errors')) {
        throw response.errors;
      } else {
        // this is probably not needed since it's only being rendered on this same page.
        this.props.history.push(`/movies/${response.current.movie_id}`)
        console.log('createView returned true.')
      }
    })
    .catch(errors => {
      console.log('createView returned false.')
      this.setState({       
        errors: [errors.message]
      });
      console.log(this.state.errors)
    })
  }

  render() {
    return (      
      <React.Fragment>
        { !this.props.user.views.find(view => view.movie_id === this.props.movie.id) && 
          <form onSubmit={this.handleSubmit}>
            <ErrorComponent errors={this.state.errors} />        
            <input type='submit' value='Mark as watched' />
          </form>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  }
}

export default NewViewForm = withRouter(connect(mapStateToProps, { createView })(NewViewForm));
