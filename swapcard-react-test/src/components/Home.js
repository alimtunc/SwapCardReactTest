import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ArtistCard from "./ArtistCard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Header } from "../assets/AppStyle";
import "./ArtistCard.css";
import FavoritesSidebar from "./FavoritesSidebar";

const ARTISTES = gql`
  query Artist($artist: String!, $first: Int!) {
    search {
      artists(query: $artist, first: $first) {
        nodes {
          id
          name
          gender
          area {
            name
          }
          releases {
            edges {
              node {
                title
              }
            }
          }
          fanArt {
            backgrounds {
              imageID
              url
            }
          }
          theAudioDB {
            biography
          }
        }
      }
    }
  }
`;

const LogoStyle = styled.section`
  position: absolute;
  margin: 10px;
`;

const InformationBox = styled.section`
  text-align: center;
  margin-top: 30px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: "Booba" };

    this.updateArtist = this.updateArtist.bind(this);
  }

  updateArtist(event) {
    this.setState({ artist: event.target.value });
  }

  render() {
    return (
      <div>
        <Header>
          <form action="">
            <input
              type="search"
              value={this.state.artist}
              onChange={this.updateArtist}
            />
            <FontAwesomeIcon icon="search" />
          </form>
        </Header>
        <LogoStyle>
          <Logo />
        </LogoStyle>
        <div>
          <FavoritesSidebar />
          <Query
            query={ARTISTES}
            variables={{ artist: this.state.artist, first: 10 }}
          >
            {({ loading, error, data }) => {
              if (loading) return <InformationBox>Loading...</InformationBox>;
              if (error)
                return (
                  <InformationBox>
                    No artists was found with this name..
                  </InformationBox>
                );

              const artists = data.search.artists.nodes;
              return (
                <div>
                  {artists.map(artist => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Home;
