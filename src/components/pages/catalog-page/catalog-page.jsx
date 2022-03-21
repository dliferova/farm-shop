import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "../../ui/button/button";
import {
    StyledCatalog,
    LeftColumn,
    Option,
    FilterInput
} from "./styles";

function CatalogPage() {
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
            <div>Слайдер с продуктами</div>
        </StyledCatalog>
    );
}

export default CatalogPage;