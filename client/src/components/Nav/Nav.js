import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
  
  export default class Example extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="info" fixed="top" light expand="sm">
            <NavbarBrand href="/home">React Pay</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/pay/">Pay</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bill/">Bill</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/report/">Report</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bolt/">Bolt</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/config/">Config</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/logout/">Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
