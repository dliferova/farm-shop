import React from "react";
import { PopupStyled, StyledCloseButton } from "./styles";

const popup = (ContentComponent) => {
  return (props) => (
    <PopupStyled>
      <StyledCloseButton
        onClick={() => props.onCloseClick()}
      />
      <ContentComponent {...props} />
    </PopupStyled>
  );
}

export default popup;
