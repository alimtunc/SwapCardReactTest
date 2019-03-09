import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Root from "./router";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faChevronLeft,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

const client = new ApolloClient({ uri: "https://graphbrainz.herokuapp.com/" });
library.add(faSearch, faChevronLeft, faTrashAlt);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    );
  }
}

export default App;
