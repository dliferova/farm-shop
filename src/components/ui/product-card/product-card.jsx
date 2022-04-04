import React from "react";
import {TitleSize} from "/src/components/ui/title/title";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";
import {
  ProductCardStyled,
  ProductImage,
  ContentWrapper,
  ProductTitle,
  PriceInfo,
  Price,
  Weight,
  ProductCardWrapper
} from "./styles";

function ProductCard({
                       product,
                       onClick
                     }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.details}/>
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.features}/>
    }
  ];

  return (
    <ProductCardStyled>
      <ProductCardWrapper>
        <ProductImage
          src={product.image}
          onClick={() => onClick()}
        />
        <ContentWrapper>
          <ProductTitle
            as="h3"
            size={TitleSize.SMALL}
            onClick={() => onClick()}
          >
            {product.name}
          </ProductTitle>
          <Tabs maxContentHeiht={105} tabsList={tabsList}/>
          <PriceInfo>
            <Price>{product.price} руб.</Price>
            <Weight> / {product.weight} гр. </Weight>
          </PriceInfo>
        </ContentWrapper>
      </ProductCardWrapper>
    </ProductCardStyled>
  );
}

export default ProductCard;
