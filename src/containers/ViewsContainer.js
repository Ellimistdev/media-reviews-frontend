import React, { Component } from 'react';
import ViewComponent from '../components/ViewComponent';

class ViewsContainer extends Component {
  render() {
    return (      
      <React.Fragment>
        <h2>Views!</h2>
        <ul className='view-list'>
        {
          this.props.views.map(view => {
            return (
                <ViewComponent key={view.id} view={view} auth={this.props.auth} />
            )
          })
        }        
        </ul>
      </React.Fragment>
    )
  }  
}

export default ViewsContainer;