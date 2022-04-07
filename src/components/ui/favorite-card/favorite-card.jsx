import React from "react";
import {TitleSize} from "/src/components/ui/title/title";
import {Price, ProductImage, ProductTitle, Weight} from "../product-card/styles";
import {FavoriteCardStyled, PriceInfoStyled, FavoriteCardWrapper} from './styles';

// Карточка товара
function FavoriteCard({ productInfo }) {

  console.log(productInfo);

  return (
    <FavoriteCardStyled>
      <FavoriteCardWrapper>
        <ProductImage
          src={productInfo.image}
          alt={productInfo.name}
        />
        <ProductTitle
          as="h3"
          size={TitleSize.EXTRA_SMALL}
        >
          {productInfo.name}
        </ProductTitle>
        <PriceInfoStyled>
          <Price>{productInfo.price} руб.</Price>
          <Weight> / {productInfo.weight} гр. </Weight>
        </PriceInfoStyled>
      </FavoriteCardWrapper>


    </FavoriteCardStyled>
  );
}

export default FavoriteCard;
