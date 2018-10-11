import React, { Component } from "react";
import "./Nav.css";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Router>
        <Navbar color="blue" dark expand="md" scrolling>
          <NavbarBrand href="/Home">
            <strong>React Pay</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/Pay">Pay</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Bill">Bill</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Report">Report</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Bolt">Bolt</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Config">Config</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Logout">Logout</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}
