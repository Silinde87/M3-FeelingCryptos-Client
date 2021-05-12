import React, { Component } from "react";
import Form from "../../components/Form/Form";
import { withAuth } from '../../context/auth.context';

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const fields = ["email", "password"];

    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleFormSubmit} onChange={this.handleChange} fields={fields} state={this.state}/>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
