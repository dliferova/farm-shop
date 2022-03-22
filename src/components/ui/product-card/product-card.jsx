import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";
import { ProductImage, ContentWrapper, ProductTitle, Price, ProductCardWrapper } from "./styles";

function ProductCard({ product }) {
    const tabsList = [
        {
            title: "Oписание",
            content: product.description
        },
        {
            title: "Характеристики",
            content: <OptionsList list={product.specifications} />
        },
        {
            title: "Свойства",
            content: <OptionsList list={product.structure} />
        }
    ];
    return (
        <ProductCardWrapper>
            <ProductImage src={product.image}/>
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Tabs maxContentHeiht="105px" tabsList={tabsList} />
                <Price>
                    {product.price} руб. / {product.weight} гр.
                </Price>
            </ContentWrapper>
        </ProductCardWrapper>
    );
}

export default ProductCard;