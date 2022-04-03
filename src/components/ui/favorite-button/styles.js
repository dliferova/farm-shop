import { Link } from "react-router-dom";
import styled from "styled-components";
import favoriteIcon from "/src/assets/favorite-icon.svg";

export const FavoriteButtonStyled = styled(Link)`
  display: block;
  width: 45px;
  height: 45px;
  border: 1px solid #000000;
  border-radius: 50%;
  position: relative;

  &:hover {
    border: 2px solid #eb3f49;
  }

  &:after {
    content: url(${favoriteIcon});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%)translateY(-50%);
    width: 20px;
    height: 20px;
  }
`;

