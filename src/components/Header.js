import React, { Component } from "react";

import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Star Wars Spaceships Store
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
