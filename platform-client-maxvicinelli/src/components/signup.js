import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

    handleAuthAttempt = () => {
      const user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      };
      console.log(user);
      this.props.signupUser(user);
    }

    setEmail = (event) => {
      this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
      this.setState({ password: event.target.value });
    }

    setUsername = (event) => {
      this.setState({ username: event.target.value });
    }

    render() {
      return (
        <div>
          <div>The Posts App</div>
          <div>
            <div>Email</div>
            <input onChange={this.setEmail} />
          </div>
          <div>
            <div>Username</div>
            <input onChange={this.setUsername} />
          </div>
          <div>
            <div>Password</div>
            <input onChange={this.setPassword} />
          </div>
          <button type="submit" onClick={this.handleAuthAttempt}>Sign Up</button>
        </div>
      );
    }
}

export default connect(null, { signupUser })(SignUp);
