import React, { Component } from "react";
import styled from "styled-components";
import { CardBox } from "../assets/AppStyle";
import { connect } from "react-redux";
import { deleteFavorite } from "../js/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = styled.div`
  height: 100%;
  float: right;
  width: 300px;
  right: 0px;
  position: absolute;
  border: 2px solid #00cc88;
`;

const SidebarBox = styled(CardBox)`
  width: 80%;
`;

const Favorites = styled.h1`
  text-align: center;
`;

const TrashIcon = styled.div`
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

class FavoritesSidebar extends Component {
  render() {
    return (
      <Sidebar>
        <Favorites>My Favorites</Favorites>
        {this.props.favorites.map(data => {
          return (
            <SidebarBox key={data.id}>
              {data.name}
              <TrashIcon>
                <FontAwesomeIcon
                  onClick={() => this.props.deleteFavorite(data.id)}
                  icon="trash-alt"
                />
              </TrashIcon>
            </SidebarBox>
          );
        })}
      </Sidebar>
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
    deleteFavorite: artistID => dispatch(deleteFavorite(artistID))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesSidebar);
