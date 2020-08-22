import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Navbar className="navbar" bg="" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            src="/images/starwars-logo.png"
            className="logo-img"
            alt="basic Star Wars logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="transparent">
            <Badge variant="light">{this.props.itemsInCart}</Badge>
            <FaShoppingCart
              style={{ color: "white", width: "40px", height: "40px" }}
            />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
