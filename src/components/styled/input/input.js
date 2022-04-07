import styled from "styled-components";

export const InputSize = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const InputSizeValue = {
  [InputSize.BIG]: {
    fontSize: "18px",
    lineHeight: "150%",
    minWidth: "189px",
  },
  [InputSize.MEDIUM]: {
    fontSize: "16px",
    lineHeight: "140%",
    minWidth: "169px",
  },
  [InputSize.SMALL]: {
    fontSize: "14px",
    lineHeight: "130%",
    minWidth: "129px",
  },
};

const Input = styled.input.attrs(props => ({
  type: "text",
}))`
  display: flex;
  align-items: center;
  color: rgba(134, 133, 136, 1);
  outline: 1px solid #6693B9;

  &:hover {
    outline: 1px solid #2E78B7;
  }

  &:focus:invalid {
    outline: 1px solid #F75531;
  }

  ::placeholder {
    color: rgba(134, 133, 136, 0.5);
  }

  &:focus:invalid::placeholder {
    color: #F75531;;
  }
`;

export default Input;
