import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "../../ui/button/button";
import {
    StyledCatalog,
    LeftColumn,
    Option,
    FilterInput,
    ProductSwiper
} from "./styles";
import ProductCard from "/src/components/ui/product-card/product-card";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function CatalogPage({ products }) {
    return (
        <StyledCatalog>
            <LeftColumn>
                <Option>
                    <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
                        Выберите продукты
                    </Title>
                    Чекбокс со списком продуктов
                </Option>
                <Option>
                    <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
                        Сделать заказ
                    </Title>
                    <FilterInput placeholder="Введите адрес доставки"/>
                    <Button maxWidth>Купить</Button>
                </Option>
            </LeftColumn>
            <ProductSwiper>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </ProductSwiper>
        </StyledCatalog>
    );
}

export default CatalogPage;
