import styled from "styled-components";
import {Img, Li, Ul} from "../../styled";
import stars from "/src/assets/stars.svg";
import starsActive from "/src/assets/stars-active.svg";

export const ReviewsListStyled = styled(Ul)`
  list-style: none;
`;

export const ReviewItemStyled = styled(Li)`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(134, 133, 136, 0.2);
  padding: 10px 0;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const ReviewItemHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 15px;
  justify-items: start;
  margin: 0 0 12px 0;
`;

export const UserAvatar = styled(Img)`
  border-radius: 50%;

  grid-row: 1 / span 2;
  align-self: stretch;
`;

export const UserName = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  color: ${(props) => props.theme.fontColorBlack};

  grid-column: 2 / span 1;
`;

export const ReviewRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RatingStars = styled.div`
  position: relative;
  display: block;
  font-size: 0;
  width: 97px;

  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    background: url(${stars}) transparent no-repeat center;
  }
`;

export const ReviewDate = styled.time`

`;

export const RatingStarsSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 100%;
  overflow: hidden;

  &:before {
    content: "";
    width: 85px;
    display: inline-block;
    height: 100%;
    background: url(${starsActive}) transparent no-repeat center;
  }
`;

export const ReviewItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ReviewMessage = styled.q`
  margin: 0;
  font-style: italic;
  font-size: 16px;
`;
