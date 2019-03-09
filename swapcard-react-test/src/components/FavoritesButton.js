import React, { Component } from "react";
import { connect } from "react-redux";
import { addFavorite } from "../js/actions/index";
import { Button } from "../assets/AppStyle";

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: artist => dispatch(addFavorite(artist))
  };
}

class FavoritesButton extends Component {
  render() {
    return (
      <Button onClick={() => this.props.addFavorite(this.props.artist)}>
        Add to favorite
      </Button>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FavoritesButton);
