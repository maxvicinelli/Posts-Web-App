/* eslint-disable react/no-danger */
/* eslint-disable react/no-danger-with-children */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchPost, deletePost, updatePost } from '../actions/index';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  componentDidMount = () => {
    this.props.fetchPost(this.props.match.params.postID);
  }

  removePost = () => {
    this.props.deletePost(this.props.current.id, this.props.history);
  }

  startEdits = () => {
    this.setState(() => {
      return { isEditing: true };
    });
  }

  finishEdits = () => {
    this.setState(() => {
      return { isEditing: false };
    });
    const post = {
      title: document.getElementById('title-ta').value,
      content: document.getElementById('content-ta').value,
      tags: document.getElementById('tags-ta').value,
      coverUrl: document.getElementById('coverUrl-ta').value,
      id: this.props.current.id,
    };
    this.props.updatePost(post);
  }

  renderContent = () => {
    if (!this.state.isEditing) {
      return (
        <div>
          <div className="single-post-text">{this.props.current.title}</div>
          <div className="single-post-text">{this.props.current.tags}</div>
          <div className="single-post-text" dangerouslySetInnerHTML={{ __html: marked(this.props.current.content || '') }} />
          <div className="single-post-text">{this.props.current.coverUrl}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div><textarea id="title-ta">{this.props.current.title}</textarea></div>
          <div><textarea id="tags-ta">{this.props.current.tags}</textarea></div>
          <div><textarea id="content-ta">{this.props.current.content}</textarea></div>
          <div><textarea id="coverUrl-ta">{this.props.current.coverUrl}</textarea></div>
        </div>

      );
    }
  }

  renderButton = () => {
    if (!this.state.isEditing) {
      return (
        <div>
          <i className="fa fa-arrow-left" onClick={this.goBack} aria-hidden="true" />
          <i onClick={this.removePost} className="fa fa-trash" aria-hidden="true" />
          <i className="fa fa-pencil-square-o" onClick={this.startEdits} aria-hidden="true" />
        </div>
      );
    } else {
      return (
        <div>
          <i className="fa fa-arrow-left" onClick={this.goBack} aria-hidden="true" />
          <i onClick={this.removePost} className="fa fa-trash" aria-hidden="true" />
          <i className="fa fa-check" onClick={this.finishEdits} aria-hidden="true" />
        </div>
      );
    }
  }

  goBack = () => {
    this.props.history.push('/');
  }

  render() {
    if (this.props.current == null) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="single-post-container">
          <div className="single-post-content">
            {this.renderContent()}
          </div>
          <div>Author is {this.props.current.author.username}</div>
          <div className="post-icons">
            {this.renderButton()}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    current: reduxState.posts.current,
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post);
