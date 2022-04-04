import styled from "styled-components";
import crossIcon from "/src/assets/icon-cross.svg";

export const StyledCloseButton = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  width: 25px;
  height: 25px;
  background-image: url("${crossIcon}");
  background-position: center;
  background-size: cover;
  background-color: inherit;
  position: absolute;
  right: 20px;
  top: 25px;
`;
