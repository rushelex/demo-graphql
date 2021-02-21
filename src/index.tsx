import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

const apolloClient = new ApolloClient({
  uri: `https://api.graphqlplaceholder.com/`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
