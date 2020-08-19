import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const AClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    url: "https://swapi.apis.guru/",
  }),
});

ReactDOM.render(
  <ApolloProvider client={AClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
