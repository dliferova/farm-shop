import React, { forwardRef } from "react";
import { StyledCloseButton } from "./styles";

const CloseButton = forwardRef(
  ({ onClick } ) => {
    return (
      <StyledCloseButton
        onClick={() => onClick()}
      />
    );
  }
);

export default CloseButton;
