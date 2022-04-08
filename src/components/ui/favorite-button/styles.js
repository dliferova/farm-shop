import { Link } from "react-router-dom";
import styled from "styled-components";
import favoriteIcon from "/src/assets/favorite-icon.svg";
import favoriteIconActive from "/src/assets/favorite-icon-active.svg";

export const FavoriteButtonStyled = styled(Link)`
  display: block;
  width: 45px;
  height: 45px;
  position: relative;
  margin-left: 20px;

  &:after {
    content: url(${favoriteIcon});
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover:after {
    content: url(${favoriteIconActive});
  }
`;

