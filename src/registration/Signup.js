import React, { Component } from "react";
import history from "../history";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

import Dialog from 'react-bootstrap-dialog'
import "./Signup.css";
import Button from '@material-ui/core/Button';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.sendSignUp = this.sendSignUp.bind(this)
    this.state = {
      name:"",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  sendSignUp = () => {
    let details = {name: this.state.name,
                    email: this.state.email,
                    password: this.state.password};
    sessionStorage.setItem("Signeduser", JSON.stringify(details));
    this.dialog.showAlert('Hi \t'+ this.state.name.toUpperCase() + '\tyou have successfully been registered!');
    history.push('/login');
    setTimeout(function(){
      window.location.reload()
    },3000); 
    
    
  }
  
  
  renderForm() {
    return (
      <form className = "showAsShadowCard" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="legendProperty">Sign-up</legend>
          <FormGroup  controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
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
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
        </fieldset>
        <Button variant="contained" color="primary"
            className="buttonSignUp"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.sendSignUp}
          >
            SignUP
          </Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        
          {this.renderForm()}
          <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    );
  }
}
