import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.section`
  float: left;
  position: absolute;
  top: 20px;
  left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

class BackButton extends Component {
  static contextTypes = {
    router: () => true
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
