import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class StarshipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card bg="dark">
        <Card.Header className="spaceship-card-header" as="h5">Cena: {this.props.price}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.manufacturers}
          </Card.Text>
          <Button variant="outline-light">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default StarshipCard;
