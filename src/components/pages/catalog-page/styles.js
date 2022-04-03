import styled, {css} from "styled-components";
import {Section} from "/src/components/styled";
import {TextInput} from "/src/components/ui/text-input/text-input";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";
import {Swiper} from "swiper/react";

export const StyledCatalog = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const LeftColumn = styled.div`
  width: 353px;
  padding-right: 20px;
  overflow-y: overlay;
  max-height: 100%;
`;

export const Option = styled(Section)`
  display: block;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 24px 20px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 40px;
`;

export const FilterInput = styled(TextInput)`
  margin-bottom: 40px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }`;

export const PriceLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
          background-color: #fc9b27;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-image: url(${checkboxSelect});
          background-repeat: no-repeat;
          background-position: center center;
        `
        : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
        `}
  }
`;
