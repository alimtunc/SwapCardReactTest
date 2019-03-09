import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Home from "./components/Home";
import ArtistDetails from "./components/ArtistDetails";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ArtistDetails" component={ArtistDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
