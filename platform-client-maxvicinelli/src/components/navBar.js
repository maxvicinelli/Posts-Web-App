import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { signoutUser } from '../actions/index';

class NavBar extends Component {
    handleSignOut = () => {
      console.log(this.props.history);
      this.props.signoutUser(this.props.history);
    }

    renderNavBar = () => {
      if (!this.props.authenticated) {
        return (
          <nav>
            <ul>
              <li><NavLink exact to="/"><i id="new-post-icon" className="fa fa-globe" aria-hidden="true" /></NavLink></li>
              <li><NavLink to="/posts/new"><i id="posts-icon" className="fa fa-plus-square" aria-hidden="true" /></NavLink></li>
              <li><NavLink to="/signin"><i className="fa fa-sign-in" aria-hidden="true" /></NavLink></li>
              <li><NavLink to="/signup"><i className="fa fa-user-plus" aria-hidden="true" /></NavLink></li>
            </ul>
          </nav>
        );
      } else {
        return (
          <nav>
            <ul>
              <li><NavLink exact to="/"><i id="new-post-icon" className="fa fa-globe" aria-hidden="true" /></NavLink></li>
              <li><NavLink to="/posts/new"><i id="posts-icon" className="fa fa-plus-square" aria-hidden="true" /></NavLink></li>
              <li><i onClick={this.handleSignOut} className="fa fa-sign-out" aria-hidden="true" /></li>
            </ul>
          </nav>
        );
      }
    }

    render() {
      return (
        <div>
          {this.renderNavBar()}
        </div>
      );
    }
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
