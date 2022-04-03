import styled from "styled-components";
import {Img} from "../../styled";

export const ProductCardDetailedWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProductCardDetailedHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-bottom: 48px;
`;

export const ProductImage = styled(Img)`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
`;

export const ProductAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const PriceInfo = styled.div`
  display: block;
  margin-bottom: 24px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductDescription = styled.span`
  color: ${(props) => props.theme.colorGrey};
  margin-bottom: 24px;
`;

export const PriceInfoDetailed = styled.span`
  color: ${(props) => props.theme.colorGrey};
`;

export const ProductDetailedCardBody = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;


