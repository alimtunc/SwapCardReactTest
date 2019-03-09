import React, { Component } from "react";
import styled from "styled-components";
import { CardBox } from "../assets/AppStyle";
import { connect } from "react-redux";
import { deleteFavorite } from "../js/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { Button } from "../assets/AppStyle";

const Sidebar = styled.div`
  height: calc(100% - 140px);
  overflow-y: auto;
  float: right;
  width: 300px;
  right: 0px;
  transform: ${props =>
    props.showSidebar ? "translateX(0px)" : "translate(250px)"};
  transition: transform 300ms ease-in-out;
  top: 100px;
  position: fixed;
  border: 2px solid #00cc88;
`;

const SidebarBox = styled(CardBox)`
  width: 80%;
`;

const SidebarButton = styled(Button)`
  margin-right: 10px;
  margin-top: 3px;
`;

const TrashButton = styled(Button)`
  float: right;
`;

class FavoritesSidebar extends Component {
  state = { showSidebar: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.favorites.length === this.props.favorites.length - 1) {
      toast.info("🦄 He's gone !", {
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
      <Sidebar showSidebar={this.state.showSidebar}>
        <SidebarButton>
          <FontAwesomeIcon
            onClick={() =>
              this.setState({ showSidebar: !this.state.showSidebar })
            }
            icon="bars"
            size="2x"
          />
        </SidebarButton>
        <p style={{ textAlign: "center" }}>My Favorites</p>
        {this.props.favorites.map(data => {
          return (
            <SidebarBox key={data.id}>
              {data.name}
              <TrashButton>
                <FontAwesomeIcon
                  onClick={() => this.props.deleteFavorite(data.id)}
                  icon="trash-alt"
                  size="lg"
                />
              </TrashButton>
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
