import styled from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const Favorites = styled(Section)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
  text-align: center;
`;

export const FavoritesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
`;
