import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

    handleAuthAttempt = () => {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.signinUser(user);
    }

    setEmail = (event) => {
      this.setState({ email: event.target.value });
    }

    setPassword = (event) => {
      this.setState({ password: event.target.value });
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
            <div>Password</div>
            <input onChange={this.setPassword} />
          </div>
          <button type="submit" onClick={this.handleAuthAttempt}>Sign In</button>
        </div>
      );
    }
}

export default connect(null, { signinUser })(SignIn);
