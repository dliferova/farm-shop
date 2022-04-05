import React from "react";
import {ProductCardDetailedWrapper,
        ProductCardDetailedHeader,
        ProductAbout,
        ProductDescription,
        PriceInfo,
        ProductDetailedCardBody,
        ProductImage,
        ButtonsGroup
} from "./styles";
import {TitleSize} from "../title/title";
import {Price, ProductTitle, Weight} from "../product-card/styles";
import Button from "../button/button";
import OptionsList from "../options-list/options-list";
import Tabs from "../tabs/tabs";
import FavoriteButton from "../favorite-button/favorite-button";
import Mailing from "../../blocks/mailing/mailing";
import ReviewsList from "../reviews/reviews-list";

function ProductCardDetailed({ product, reviews }) {
  const tabsList = [
    {
      title: "Oписание",
      content:
        <>
          <OptionsList list={product.details} />
          <OptionsList list={product.features} />
        </>
    },

    {
      title: "Отзывы",
      content:
        <ReviewsList reviews={reviews} />
    },
  ];

  return (
    <ProductCardDetailedWrapper>
      <ProductCardDetailedHeader>
        <ProductImage src={product.image}/>
        <ProductAbout>
          <ProductTitle as="h2" size={TitleSize.MEDIUM}>
            {product.name}
          </ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <PriceInfo>
            <Price>{product.price} руб.</Price>
            <Weight> / {product.weight} гр. </Weight>
          </PriceInfo>
          <ButtonsGroup>
            <Button>В корзину</Button>
            <FavoriteButton>В корзину</FavoriteButton>
          </ButtonsGroup>
        </ProductAbout>
      </ProductCardDetailedHeader>

      <ProductDetailedCardBody>
        <Tabs tabsList={tabsList} />
      </ProductDetailedCardBody>
      <Mailing/>

    </ProductCardDetailedWrapper>
  )
}

export default ProductCardDetailed;
