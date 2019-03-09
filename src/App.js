import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Root from "./router";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faChevronLeft,
  faTrashAlt,
  faBars,
  faCartPlus,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const client = new ApolloClient({ uri: "https://graphbrainz.herokuapp.com/" });
library.add(
  faSearch,
  faChevronLeft,
  faTrashAlt,
  faBars,
  faCartPlus,
  faArrowCircleRight
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ToastContainer />
        <Root />
      </ApolloProvider>
    );
  }
}

export default App;
