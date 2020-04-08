import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { Container } from "./containers/Container"
import "./App.css";
import { URL } from "./Config";

function App() {
  const client = new ApolloClient({
    uri: URL
  });

  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  );
}

export default App;
