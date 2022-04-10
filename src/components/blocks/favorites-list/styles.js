import styled from "styled-components";
import { Section, Li } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const Favorites = styled.section`
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 45px;
`;

export const FavoritesListItem = styled(Li)`
  border: 1px solid rgba(134, 133, 136, 0.3);
  margin: 0;
  padding: 20px 10px;
  min-height: 324px;
`;
