import React, { Component } from "react";
import { Header, CardBox } from "../assets/AppStyle";
import styled from "styled-components";
import BackButton from "./BackButton";
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
    console.log(this.props.location);
  }

  render() {
    let biography = this.state.artist.theAudioDB
      ? this.state.artist.theAudioDB.biography
      : "God damn.. who let the intern with the database ?";

    let titles =
      this.state.artist.releases && this.state.artist.releases.edges
        ? this.state.artist.releases.edges
        : new Map([1, { title: "No music" }]);

    let fanArt =
      this.state.artist.fanArt && this.state.artist.fanArt.backgrounds
        ? this.state.artist.fanArt.backgrounds
        : new Map([1, { title: "No music" }]);

    return (
      <div>
        <Header>
          <BackButton />
          <Title>{this.state.artist.name}</Title>
        </Header>
        <CardBox>
          <h4>Description :</h4>
          {biography}
          <h4>Some music from this artist :</h4>
          <div>
            {titles
              .slice(0, 5)
              .map((data, index) => data.node.title + (index < 4 ? ", " : ""))}
          </div>
          <ImageBox>
            <h4>Pictures of this artist :</h4>
            {fanArt.map(data => (
              <Image
                style={style.wrapper}
                src={data.url}
                height={200}
                width={200}
              />
            ))}
          </ImageBox>
        </CardBox>
      </div>
    );
  }
}

export default ArtistDetails;
