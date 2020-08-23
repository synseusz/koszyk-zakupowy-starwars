import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FaShoppingCart } from "react-icons/fa";

function Header(props) {

    return (
      <Navbar className="navbar" sticky="top">
        <Navbar.Brand>
          <img
            src="/images/starwars-logo.png"
            className="logo-img"
            alt="basic Star Wars logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {props.itemsInCart > 0 && (
            <Badge className="itemsInCart-badge">
              {props.itemsInCart}
            </Badge>
          )}
          <Button variant="transparent">
            <FaShoppingCart
              style={{ color: "white", width: "40px", height: "40px" }}
            />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;
