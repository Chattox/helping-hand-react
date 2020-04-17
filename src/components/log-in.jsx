import React from 'react';
// import axios from 'axios';

class LogIn extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleInput = (event) => {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <div className="logIn">
        <p>Log in:</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input name="username" type="text" onChange={this.handleInput} />
          </label>
          <label>
            Password:
            <input name="password" type="text" onChange={this.handleInput} />
          </label>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
