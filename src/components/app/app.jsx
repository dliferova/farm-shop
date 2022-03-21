import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <PageWrapper features={features} products={products}>Контент страницы</PageWrapper>
        </>
    );
}