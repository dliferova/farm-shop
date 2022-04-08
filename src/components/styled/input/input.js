import styled from "styled-components";

export const InputSize = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const Input = styled.input.attrs(props => ({
  type: "text",
}))`
  display: flex;
  align-items: center;
  color: black;
  border: 1px solid #DFD8C0;

  &:hover {
    border: 1px solid #FFF5D6;
  }

  &:focus {
    border: 1px solid #DFD8C0;
  }

  &:focus:invalid {
    border: 1px solid #F75531;
  }

  ::placeholder {
    color: rgba(134, 133, 136, 1);
  }

  &:focus:invalid::placeholder {
    color: #F75531;
  }
`;

export default Input;
