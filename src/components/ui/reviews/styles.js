import styled from "styled-components";
import {Img, Li, Ul} from "../../styled";
import stars from "/src/assets/stars.svg";
import starsActive from "/src/assets/stars-active.svg";


export const ReviewsListStyled = styled(Ul)`
  list-style: none;
`;

export const ReviewItemStyled = styled(Li)`
  margin-bottom: 15px;
`;

export const ReviewItemUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserAvatarWrapper = styled.div`
  background-image: url("/src/assets/avatar.svg");
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const UserAvatar = styled(Img)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserName = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  color: ${(props) => props.theme.fontColorBlack};
`;

export const ReviewItemMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ReviewRating = styled.div`

`;

export const ReviewMessage = styled.q`
  margin: 0;
  font-style: italic;
`;

export const ReviewDate = styled.time`

`;

export const RatingStars = styled.div`
  position: relative;
  display: block;
  font-size: 0;

  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    background: url(${stars}) transparent no-repeat center;
  }
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
    display: inline-block;
    height: 100%;
    background: url(${starsActive}) transparent no-repeat center;
  }
`;

