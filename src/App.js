import React, { Component } from "react";
import "./App.css";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Body from "./components/Body";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: 0,
      itemsInCartArray: [],
    };
    this.onQtyChange = this.onQtyChange.bind(this)
  }

  onQtyChange(itemsInCart) {
    this.setState({itemsInCart: itemsInCart})
  }

  render() {
    return (
      <div className="main-container">
        <Header itemsInCart={this.state.itemsInCart} />
        <Container className="body-container" fluid>
          <Body itemsInCartArray={this.state.itemsInCartArray} itemsInCart={this.onQtyChange} />
        </Container>

        {/* TO DO - FOOTER */}
      </div>
    );
  }
}

export default App;
