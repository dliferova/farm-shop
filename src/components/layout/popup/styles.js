import styled from "styled-components";

export const PopupStyled = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colorWhite};
  width: 80vw;
  max-width: 1146px;
  top: 50%;
  right: 50%;
  transform: translateX(50%)translateY(-50%);
  padding: 40px 20px;
  outline: 2px solid #333333;
`;
