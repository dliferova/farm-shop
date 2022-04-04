import styled from "styled-components";

export const PopupStyled = styled.div`
  position: absolute;
  width: 100vw;
  max-width: ${(props) => props.theme.pageWidth};
  display: flex;
  justify-content: center;
  z-index: 50;
  padding: 20px 0;
`;
