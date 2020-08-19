import React from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";



function App() {
  
  return (
    <div className="main">
      <Header />
      <div className="body">
        <Body />
      </div>
      
    </div>
  );
}

export default App;
