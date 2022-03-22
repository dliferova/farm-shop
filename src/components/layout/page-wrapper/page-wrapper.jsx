import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import CatalogPage from "/src/components/pages/catalog-page/catalog-page";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <CatalogPage products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
