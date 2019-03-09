import React, { Component } from "react";
import { connect } from "react-redux";
import { addFavorite } from "../js/actions/index";
import { Button } from "../assets/AppStyle";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFavoriteButton = styled(Button)`
  float: right;
`;

class FavoritesButton extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.favorites.length === this.props.favorites.length + 1) {
      toast("🦄 You got new one, congrats !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }

  render() {
    return (
      <AddFavoriteButton
        onClick={() => this.props.addFavorite(this.props.artist)}
      >
        <FontAwesomeIcon icon="cart-plus" size="3x" />
      </AddFavoriteButton>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: artist => dispatch(addFavorite(artist))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesButton);
