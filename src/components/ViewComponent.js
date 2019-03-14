import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deleteView } from '../redux/actions/ViewActions';

class ViewComponent extends Component { 
  handleDelete = event => {
    let id = event.target.href.substr(event.target.href.lastIndexOf('/')+1);
    event.preventDefault();
    this.props.deleteView(id)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    const { view, auth } = this.props;

    const ownerAction = (      
      <React.Fragment>
        <p><Link to={`${view.id}`} onClick={this.handleDelete}>Delete View</Link></p>
      </React.Fragment>
    );
    
    return (    
      <li className='view'>
        <p>Viewed <Link to={`/movies/${view.movie_id}`}>{view.title}</Link> on {view.created_at}</p>        
        { auth.authenticated && (auth.user.id === view.user_id) ? ownerAction : '' }
      </li>
    );
  } 
}

export default withRouter(connect(null, { deleteView })(ViewComponent));
