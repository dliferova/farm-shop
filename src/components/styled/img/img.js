import styled from "styled-components";

const Img = styled.img`
  width: ${(props) => props.width}px;
  object-fit: ${(props) => props.contain};
  height: auto;
`;

export default Img;
