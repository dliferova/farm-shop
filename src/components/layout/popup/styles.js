import styled from "styled-components";
import crossIcon from "/src/assets/icon-cross.svg";

export const PopupStyled = styled.div`
  position: absolute;
  width: 100vw;
  max-width: ${(props) => props.theme.pageWidth};
  display: flex;
  justify-content: center;
  z-index: 50;
  padding: 20px 0;
`;

export const StyledCloseButton = styled.button`
  z-index: 50;
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
  right: 60px;
  top: 35px;
`;
