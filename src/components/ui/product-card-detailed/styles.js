import styled from "styled-components";
import {Img} from "../../styled";

export const ProductCardDetailedWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  width: 90%;
  padding: 20px 20px;
  position: relative;
`;

export const ProductCardDetailedHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-bottom: 28px;
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


