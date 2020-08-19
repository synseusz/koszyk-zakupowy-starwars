import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar
        className="navbar"
        bg="dark"
        variant="dark"
        expand="md"
        fixed="top"
      >
        <div className="navbar-content">
        <Navbar.Brand href="#home">Star Wars Spaceships Store</Navbar.Brand>
        <Button variant="dark">
          <FaShoppingCart style={{width:"40px", height:"40px"}}/>
        </Button>
        </div>
      </Navbar>
    );
  }
}

export default Header;
