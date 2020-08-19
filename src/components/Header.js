import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar className="navbar" bg="" variant="dark" fixed="top">
        <Navbar.Brand>
        <img src='/images/starwars-logo.png' className="logo-img" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="transparent">
            <Badge variant="light">0</Badge>
            <FaShoppingCart style={{ width: "40px", height: "40px" }} />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
