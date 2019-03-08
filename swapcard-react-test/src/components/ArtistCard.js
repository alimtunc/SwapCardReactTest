import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardBox } from "../assets/AppStyle";

const Title = styled.h1`
  font-size: 1.5em;
  color: #2502461;
  text-align: center;
`;

const BiographBox = styled.section`
  margin-bottom: 30px;
`;

const DetailsButton = styled.button`
  position: absolute;
  color: #2502461;
  font-size: 1em;
  border: 2px solid #00cc88;
  border-radius: 3px;
  width: 130px;
  height: 40px;
  bottom: 5px;
  right: 10px;
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

    return (
      <CardBox>
        <Title>{this.props.artist.name}</Title>
        <BiographBox>
          <p>Description :</p>
          {biography}
          <Link
            to={{
              pathname: "/ArtistDetails",
              state: { artist: this.props.artist }
            }}
          >
            <DetailsButton>Read more </DetailsButton>
          </Link>
        </BiographBox>
      </CardBox>
    );
  }
}

export default ArtistCard;
