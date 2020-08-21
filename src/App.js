import React from "react";
import "./App.css";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Body from "./components/Body";



function App() {
  
  return (
    <div className="main">
      <Header />
      <Container className="body-container" fluid>
        <Body />
      </Container>

      {/* TO DO - FOOTER */}
      
    </div>
  );
}

export default App;
