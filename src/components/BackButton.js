import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

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
  render() {
    return (
      <Button onClick={this.props.history.goBack}>
        <FontAwesomeIcon icon="chevron-left" size="2x" />
      </Button>
    );
  }
}

export default withRouter(BackButton);
