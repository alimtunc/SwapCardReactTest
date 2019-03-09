import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardBox, Button } from "../assets/AppStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = styled.h1`
  font-size: 1.5em;
  color: #2502461;
  text-align: center;
`;

const BiographBox = styled.section`
  margin-bottom: 30px;
`;

const DetailsButton = styled(Button)`
  float: right;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

class ArtistCard extends Component {
  render() {
    let biography = this.props.artist.theAudioDB
      ? this.props.artist.theAudioDB.biography
          .split(" ")
          .slice(0, 50)
          .join(" ")
          .concat("...")
      : "God damn.. who let the intern with the database ?";

    let area = this.props.artist.area
      ? this.props.artist.area.name
      : "No area found";

    return (
      <CardBox>
        <Title>{this.props.artist.name}</Title>
        <BiographBox>
          <h3>Area :</h3>
          {area}
          <h3>Description :</h3>
          {biography}
          <Link
            to={{
              pathname: "/ArtistDetails",
              state: { artist: this.props.artist }
            }}
          >
            <DetailsButton>
              <FontAwesomeIcon
                style={{ marginLeft: "5px" }}
                icon="arrow-circle-right"
                size="2x"
              />
            </DetailsButton>
          </Link>
        </BiographBox>
      </CardBox>
    );
  }
}

export default ArtistCard;
