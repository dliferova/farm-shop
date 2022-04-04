import React, {useEffect, useState} from "react";
import Title, {TitleSize} from "/src/components/ui/title/title";
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
import popup from "../../layout/popup/popup";
import ProductCardDetailed from "/src/components/ui/product-card-detailed/product-card-detailed";

//Swiper Import
import {SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Mousewheel, Scrollbar} from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function CatalogPage({products}) {
  const [address, setAddress] = useState();
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [productModalData, setProductModalData] = useState(null);

  useEffect(() => {
    if (!!swiperRef && selectProductIds.length === 0) {
      swiperRef.slideTo(0, 0);
    }
  }, [swiperRef, selectProductIds])

  const selectProducts = selectProductIds
    .map((id) => products
      .find((product) => product.id === id));

  const handleOnCheckboxProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  }

  const totalPrice = selectProducts.reduce((sum, product) => sum += product.price, 0);

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${totalPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  const handleOnProductCard = (product) => {
    setProductModalData(product);
  }

  const ProductCardDetailedPopup = popup(ProductCardDetailed);

  return (
    <>
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
              onClickLabel={handleOnCheckboxProduct}
            />
          </Option>
          <Option>
            <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
              Сделать заказ
            </Title>
            <FilterInput
              value={address}
              onChange={((e) => setAddress(e.target.value))}
              placeholder="Введите адрес доставки"
            />
            <PriceLabel as="span">Цена</PriceLabel>
            <PriceValue value={totalPrice}/>
            <Button
              maxWidth
              onClick={handleBuyClick}
              disabled={!(selectProductIds.length && address)}
            >
              Купить
            </Button>
          </Option>
        </LeftColumn>

        <ProductSwiper
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          scrollbar={{draggable: true}}
          mousewheel
          pagination={{
            type: "fraction"
          }}
          onSwiper={setSwiperRef}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                onClick={() => handleOnProductCard(product)}
              />
            </SwiperSlide>
          ))}
        </ProductSwiper>

      </StyledCatalog>

      {productModalData ?
        <ProductCardDetailedPopup
          onCloseClick={() => setProductModalData(null)}
          product={productModalData}
        />
        : null}
    </>
  );
}

export default CatalogPage;
