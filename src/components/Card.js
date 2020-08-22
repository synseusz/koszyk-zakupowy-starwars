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
      errorMsg: false,
    };

    this.handleCounterChange = this.handleCounterChange.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleCounterChange(e) {
    if (e.target.value === "") {
      return this.setState({ counter: "" });
    }
    const valueInt = parseInt(e.target.value);
    this.setState({ counter: valueInt });
  }

  handleIncrement() {
    if (this.state.counter === "") {
      return this.setState({ counter: 1 });
    }
    const counter = this.state.counter + 1;
    this.setState({ counter });
  }

  handleDecrement() {
    if (this.state.counter === 0 || this.state.counter === "") {
      return;
    }
    const counter = this.state.counter - 1;
    this.setState({ counter });
  }

  handleClearInput(e) {
    if (e.target.value === "0") {
      this.setState({ counter: "" });
    }
  }

  handleAddToCart() {
    const counter = this.state.counter;

    // Error handler for 0, empty and negative values
    if (counter === 0 || counter === "" || counter < 0) {
      return this.setState({ counter: "", errorMsg: true });
    }

    this.setState({ counter: "", errorMsg: false });
    this.props.itemsInCartArray.push(counter);

    const sumItemsInCart = this.props.itemsInCartArray.reduce(
      (a, b) => a + b,
      0
    );

    // Lift state up
    // Call onQtyChange function in App.js
    this.props.itemsInCart(sumItemsInCart);
  }

  render() {
    return (
      <>
        {this.props.price === null ? (
          <Card className="starship-card" bg="light">
            <Card.Header as="h5">Produkt Niedostępny</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>{this.props.manufacturer1}</Card.Text>
              {this.props.manufacturer2 && <Card.Text>oraz</Card.Text>}
              <Card.Text>{this.props.manufacturer2}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Card className="starship-card" bg="light">
            <Card.Header as="h5">Cena: {this.props.price}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>{this.props.manufacturer1}</Card.Text>
              {this.props.manufacturer2 && <Card.Text>oraz</Card.Text>}
              <Card.Text>{this.props.manufacturer2}</Card.Text>

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
            {this.state.errorMsg ? <p style={{color: "red"}}>Proszę podać właściwą ilość modeli!</p> : null}
          </Card>
        )}
      </>
    );
  }
}

export default StarshipCard;
