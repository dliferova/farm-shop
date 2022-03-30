import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 30px;
  padding: 0 24px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 20px;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
