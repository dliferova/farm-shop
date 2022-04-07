import styled from "styled-components/macro";
import {Img} from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const ProductCardStyled = styled.div`
  padding: ${(props) => props.theme.indent};
  padding-top: ${(props) => `${props.paddingTop}px` || props.theme.indent};
  padding-bottom: ${(props) =>
    `${props.paddingBottom}px` || props.theme.indent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  width: ${(props) => props.$width || "auto"};
  display: block;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
  min-height: 288px;
  margin-bottom: 40px;
`;

export const ProductImage = styled(Img)`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
  text-align: center;
  font-weight: lighter;
`;

export const PriceInfo = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
`;

export const Price = styled.span`
  padding: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
`;

export const Weight = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: normal;
  color: ${(props) => props.theme.colorGrey};
`;
