import React, { Component } from "react";
import { Header, CardBox } from "../assets/AppStyle";
import styled from "styled-components";
import BackButton from "./BackButton";
import FavoritesButton from "./FavoritesButton";
import FavoritesSidebar from "./FavoritesSidebar";
import Image from "react-image-resizer";

const Title = styled.h1`
  text-align: center;
`;

const ImageBox = styled.div``;
const style = {
  wrapper: {
    display: "inline-block"
  }
};

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: this.props.location.state.artist };
  }

  render() {
    let artist = this.state.artist;
    let area = artist.area ? artist.area.name : "No area was found";
    let biography = artist.theAudioDB
      ? artist.theAudioDB.biography
      : "God damn.. who let the intern with the database ?";

    let titles = artist.releases.edges;
    let fanArt = artist.fanArt.backgrounds;

    return (
      <div>
        <Header>
          <BackButton />
          <Title>{this.state.artist.name}</Title>
        </Header>
        <div>
          <FavoritesSidebar />
          <CardBox>
            <FavoritesButton artist={artist}>
              <p style={{ color: "black" }}>Add to favorites</p>
            </FavoritesButton>
            <h3>Area :</h3>
            {area}
            <h4>Description :</h4>
            {biography}
            <h4>Some songs :</h4>
            <div>
              {titles.length === 0 ? (
                <p>No songs was found</p>
              ) : (
                titles
                  .slice(0, 5)
                  .map(
                    (data, index) => data.node.title + (index < 4 ? ", " : "")
                  )
              )}
            </div>
            <ImageBox>
              <h4>Pictures :</h4>
              {fanArt.length === 0 ? (
                <p>No pictures was found</p>
              ) : (
                fanArt.map(data => (
                  <Image
                    key={data.imageID}
                    style={style.wrapper}
                    src={data.url}
                    height={200}
                    width={200}
                  />
                ))
              )}
            </ImageBox>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default ArtistDetails;
