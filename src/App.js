import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client'

import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
    </div>

  );
}

export default App;
