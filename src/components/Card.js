import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class StarshipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
    };

    this.handleCounterChange = this.handleCounterChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    
  }

  handleCounterChange(e) {
    if (e.target.value === "") {
      this.setState({ counter: "" });
    } else {
      const valueInt = parseInt(e.target.value);
      this.setState({ counter: valueInt });
    }
  }

  handleIncrement() {
    if (this.state.counter === "") {
      this.setState({ counter: 1 });
    } else {
      const counter = this.state.counter + 1;

      this.setState({ counter });
    }
  }

  handleDecrement() {
    if (this.state.counter === 0 || this.state.counter === "") {
      return;
    } else {
      const counter = this.state.counter - 1;
      this.setState({ counter });
    }
  }

  handleClearInput(e) {
    if (e.target.value === "0") {
      this.setState({ counter: "" });
    }
  }

  handleAddToCart() {
  

    // TO DO - if counter === 0 || counter === "" error catch
    // Please provide quantity first!!

    const counter = this.state.counter;
    this.props.itemsInCartArray.push(counter)

    const sumItemsInCart = this.props.itemsInCartArray.reduce((a, b) => a + b, 0)
    this.props.itemsInCart(sumItemsInCart)
  }

  render() {
    return (
      <>
        {this.props.price === null ? (
          <Card className="starship-card" bg="light">
            <Card.Header as="h5">Produkt Niedostepny</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>{this.props.manufacturers}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Card className="starship-card" bg="light">
            <Card.Header as="h5">Cena: {this.props.price}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>{this.props.manufacturers}</Card.Text>
              <InputGroup style={{ width: "110px" }} className="m-auto">
                <InputGroup.Prepend>
                  <Button variant="outline-dark" onClick={this.handleDecrement}>
                    -
                  </Button>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="0"
                  className="starship-card-counter-input"
                  type="number"
                  aria-label="Items count"
                  aria-describedby="basic-item-counter"
                  value={this.state.counter}
                  onChange={this.handleCounterChange}
                  onClick={this.handleClearInput}
                />
                <InputGroup.Append>
                  <Button variant="outline-dark" onClick={this.handleIncrement}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              <Button
                variant="dark"
                className="mt-2"
                onClick={this.handleAddToCart}
              >
                Dodaj do koszyka
              </Button>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default StarshipCard;
