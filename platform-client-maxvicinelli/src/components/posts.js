import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.all == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="post-container">
          {this.props.all.map((post) => {
            return (
              <NavLink to={`/posts/${post.id}`}>
                <div className="post">
                  <div className="post-content">
                    <img src={post.coverUrl} alt="" />
                    <div className="post-item">{post.title}</div>
                    <div className="post-item">{post.tags}</div>
                  </div>
                </div>
              </NavLink>

            );
          })}
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    all: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
