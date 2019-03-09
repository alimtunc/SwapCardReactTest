import styled from "styled-components";

export const Header = styled.section`
  background: #00cc88;
  height: 65px;
  width: 100%;
  padding: 2px;
`;

export const Button = styled.button`
  color: #2502461;
  font-size: 1em;
  border: 2px solid #00cc88;
  border-radius: 3px;
  height: 36px;
  width: auto;
  margin-top: 10px;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

export const CardBox = styled.section`
  position: relative;
  margin: auto;
  margin-top: 30px;
  padding: 10px;
  width: 50%;
  border: 4px solid #00cc88;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #c9cac9;
`;
