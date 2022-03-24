import React, { useState } from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "../../ui/button/button";
import {
    StyledCatalog,
    LeftColumn,
    Option,
    FilterInput,
    ProductSwiper,
    PriceLabel,
    PriceValue,
    CheckboxLabel
} from "./styles";
import ProductCard from "/src/components/ui/product-card/product-card";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function CatalogPage({ products }) {
    const [address, setAddress] = useState();
    const [selectProductIds, setSelectProductIds] = useState([]);

    const selectProducts = selectProductIds
      .map((id) => products
        .find((product) => product.id === id));

    const totalPrice = selectProducts.reduce((sum, product) => sum += product.price, 0);

    return (
        <StyledCatalog as="form">
            <LeftColumn>
                <Option>
                    <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
                        Выберите продукты
                    </Title>
                  <CheckboxList
                    labelComponent={CheckboxLabel}
                    name={"select-products"}
                    options={products.map((product) => ({
                      value: product.id,
                      title: product.name
                    }))}
                    selectValues={selectProductIds}
                    onChange={setSelectProductIds}
                  />
                </Option>
                <Option>
                    <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
                        Сделать заказ
                    </Title>
                    <FilterInput
                        value={address}
                        placeholder="Введите адрес доставки"/>
                    <PriceLabel as="span">Цена</PriceLabel>
                    <PriceValue value={totalPrice}/>
                    <Button maxWidth>Купить</Button>
                </Option>
            </LeftColumn>

            <ProductSwiper
                direction="vertical"
                slidesPerView="auto"
                scrollbar={{ draggable: true }}
                mousewheel
                pagination={{
                    type: "fanction"
                }}
            >
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
