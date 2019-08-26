import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import "./login.css";
import Dialog from 'react-bootstrap-dialog';
import history from "../history";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  showLoginAndRedirectDash = () => {
    const sessionDetailsToMatch = JSON.parse(sessionStorage.getItem("Signeduser"));
    if(sessionDetailsToMatch || sessionDetailsToMatch === null || sessionDetailsToMatch === "") {
      this.dialog.showAlert('Hi \t Please Sign up first to login to system');
    }
    if(sessionDetailsToMatch && sessionDetailsToMatch.email === this.state.email && sessionDetailsToMatch.password === this.state.password) {
      this.dialog.showAlert('Hi \t'+ (sessionDetailsToMatch.name).toUpperCase() + '\tyou have successfully loggedIn!');
      history.push("/dashboard");
      setTimeout(function() {
        window.location.reload()
      },3000); 
      sessionStorage.setItem('accessTookCorrectPath', true);
    }
    else {
      this.dialog.showAlert('Hi \t please try with correct user name and password');
    }
  }

  render() {
    return (
      <div className="Login">
        <form className = "showAsShadowCard" onSubmit={this.handleSubmit}>
          <fieldset>
              <legend className="legendProperty">Sign-in</legend>
              <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            className="buttonSignUp"
            variant="contained" color="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick = {this.showLoginAndRedirectDash}
          >
            Login
          </Button>
            </fieldset>
        </form>
        <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    );
  }
}
