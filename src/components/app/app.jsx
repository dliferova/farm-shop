import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import CatalogPage from "/src/components/pages/catalog-page/catalog-page";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import reviews from "/src/mocks/reviews";
import ScrollTop from "/src/components/ui/scroll/scroll-top";
import { GlobalStyle } from "./styles";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
              <ScrollTop />
              <Switch>
                <Route exact path={AppRoute.MAIN}>
                  <PageWrapper pageUrl={AppRoute.MAIN}>
                    <MainPage features={features} />
                  </PageWrapper>
                </Route>
                <Route exact path={AppRoute.CATALOG}>
                  <PageWrapper pageUrl={AppRoute.CATALOG}>
                    <CatalogPage products={products} reviews={reviews} />
                  </PageWrapper>
                </Route>
              </Switch>
            </Router>
        </>
    );
}
