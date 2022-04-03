import React from "react";
import { PopupStyled } from "./styles";

const popup = (ContentComponent) => {
  return (props) => (
    <PopupStyled>
      <ContentComponent {...props} />
    </PopupStyled>
  );
}

export default popup;
