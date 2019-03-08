import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ArtistCard from "./ArtistCard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Header } from "../assets/AppStyle";
import "./ArtistCard.css";

const ARTISTES = gql`
  query Artist($artist: String!, $first: Int!) {
    search {
      artists(query: $artist, first: $first) {
        nodes {
          id
          name
          gender
          releases {
            edges {
              node {
                title
              }
            }
          }
          fanArt {
            backgrounds {
              url
            }
            banners {
              url
            }
            logosHD {
              url
            }
          }
          discogs {
            realName
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
  margin: 20px;
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
        <Query
          query={ARTISTES}
          variables={{ artist: this.state.artist, first: 10 }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            const artists = data.search.artists.nodes;

            console.log(data.search.artists);
            return (
              <div class>
                {artists.map(artist => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Home;
