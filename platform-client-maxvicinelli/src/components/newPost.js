/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import '../style.scss';

class newPost extends Component {
    makePost = () => {
      console.log('making post');
      const post = {
        title: document.getElementById('title-input').value,
        content: document.getElementById('content-input').value,
        coverUrl: document.getElementById('cover-img-URL').value,
        tags: document.getElementById('tags-input').value,
      };
      console.log(post);
      this.props.createPost(post, this.props.history);
    }

    render() {
      return (
        <div className="new-post">
          <div className="new-post-title-main">Create New Post</div>
          <div className="new-post-item">
            <div className="new-post-title">Title</div>
            <input className="new-post-input" id="title-input" />
          </div>
          <div className="new-post-item">
            <div className="new-post-title">Tags</div>
            <input className="new-post-input" id="tags-input" />
          </div>
          <div className="new-post-item">
            <div className="new-post-title">Content</div>
            <input className="new-post-input" id="content-input" />
          </div>
          <div className="new-post-item">
            <div className="new-post-title">Cover Image URL</div>
            <input className="new-post-input" id="cover-img-URL" />
          </div>
          <div className="new-post-icons">
            <i className="fa fa-check" onClick={this.makePost} />
            <i className="fa fa-trash" aria-hidden="true" />
          </div>
        </div>
      );
    }
}

export default connect(null, { createPost })(newPost);
