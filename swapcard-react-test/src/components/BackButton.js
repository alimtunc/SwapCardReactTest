import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.section`
  padding: 10px;
  with: 10%;
  float: left;
  &:hover {
    cursor: pointer;
  }
`;

class BackButton extends Component {
  static contextTypes = {
    router: () => true // replace with PropTypes.object if you use them
  };

  render() {
    return (
      <Button onClick={this.context.router.history.goBack}>
        <FontAwesomeIcon icon="chevron-left" size="2x" />
      </Button>
    );
  }
}

export default BackButton;
