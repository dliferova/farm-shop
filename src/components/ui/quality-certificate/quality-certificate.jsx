import React from "react";
import { QualityCertificateWrapper, StyledButton } from "./styles";
import Title, { TitleSize } from "../title/title";

function QualityCertificate() {
  return (
    <QualityCertificateWrapper>
      <Title as="h4" size={TitleSize.EXTRA_SMALL}>
        Сертификат продукта
      </Title>
      <StyledButton link="/certificates">Смотреть</StyledButton>
    </QualityCertificateWrapper>
  );
}

export default QualityCertificate;
