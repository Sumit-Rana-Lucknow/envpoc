import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./assets/HCL.png";


class App extends Component {
  state={
    isDashboard:true
  }
  componentDidMount(){
    
    if(window.location.pathname.indexOf('dashboard') > -1){
      this.setState({isDashboard:true});
    }else {
      this.setState({isDashboard:false});
    }
  }
  render() {
    return (
      <div className="App">
     
        <div className="container">
        {this.state.isDashboard ? null: <div>
          <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">HomePage</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
          </div> }
          <Routes />
        </div>
      </div>
    );
  }
  
  
}

export default App;
