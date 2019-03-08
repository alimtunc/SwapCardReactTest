import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Home from "./components/Home";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const client = new ApolloClient({ uri: "https://graphbrainz.herokuapp.com/" });
library.add(faSearch, faChevronLeft);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
