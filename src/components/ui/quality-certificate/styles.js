import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "/src/assets/arrow.svg";

export const QualityCertificateWrapper = styled.div`
  width: 80%;
  height: 84px;
  border: 1px solid #DFD8C0;
  border-radius: 16px;
  padding: 15px;
  position: relative;
  overflow: hidden;
  justify-self: end;
`;

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.textBlack};
  margin: 20px 0 0 0;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "";
    display: block;
    right: 0;
    margin-left: 10px;
    width: 12px;
    height: 12px;
    background-image: url(${arrow});
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
