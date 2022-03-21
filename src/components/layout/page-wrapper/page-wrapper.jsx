import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import CatalogPage from "/src/components/pages/catalog-page/catalog-page";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <CatalogPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
