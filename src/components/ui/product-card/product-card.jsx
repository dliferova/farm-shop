import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";
import { ProductImage, ContentWrapper, ProductTitle, PriceInfo, Price, Weight, ProductCardWrapper } from "./styles";

function ProductCard({ product }) {
    const tabsList = [
        {
            title: "Oписание",
            content: product.description
        },
        {
            title: "Характеристики",
            content: <OptionsList list={product.details} />
        },
        {
            title: "Свойства",
            content: <OptionsList list={product.features} />
        }
    ];
    return (
        <ProductCardWrapper>
            <ProductImage src={product.image}/>
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Tabs maxContentHeiht={105} tabsList={tabsList} />
                <PriceInfo>
                  <Price>{product.price} руб.</Price>
                  <Weight> / {product.weight} гр. </Weight>
                </PriceInfo>
            </ContentWrapper>
        </ProductCardWrapper>
    );
}

export default ProductCard;
