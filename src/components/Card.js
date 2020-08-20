import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


class StarshipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className="starship-card" bg="light" disabled={true}>
        <Card.Header className="starship-card-header" as="h5">
          Cena: {this.props.price}
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.manufacturers}</Card.Text>
          <InputGroup style={{width:"110px"}} className="m-auto starship-card-input">
          <InputGroup.Append>
              <Button variant="outline-dark">-</Button>
            </InputGroup.Append>
            <FormControl
              placeholder="0"
              aria-label="Items count"
              aria-describedby="basic-item-counter"
              
            />
            <InputGroup.Append>
              <Button variant="outline-dark">+</Button>
            </InputGroup.Append>
          </InputGroup>
          <Button variant="dark" className="mt-2">Dodaj do koszyka</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default StarshipCard;
