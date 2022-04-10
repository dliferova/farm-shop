import React from "react";
import {TitleSize} from "/src/components/ui/title/title";
import {Price, ProductImage, ProductTitle, Weight} from "../product-card/styles";
import {FavoriteCardStyled, PriceInfoStyled, FavoriteCardWrapper, FavoriteCardHeader, FavoriteCardBody} from './styles';
import FavoriteButton from "../favorite-button/favorite-button";

// Карточка товара
function FavoriteCard({ productInfo }) {

  console.log(productInfo);

  return (
    <FavoriteCardStyled>
      <FavoriteCardWrapper>

        <FavoriteCardHeader>
          <ProductImage
            src={productInfo.image}
            alt={productInfo.name}
          />
          <FavoriteButton/>
        </FavoriteCardHeader>

        <FavoriteCardBody>
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
        </FavoriteCardBody>

      </FavoriteCardWrapper>


    </FavoriteCardStyled>
  );
}

export default FavoriteCard;
