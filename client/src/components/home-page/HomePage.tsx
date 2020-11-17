import React, { FunctionComponent } from "react";
import Newsfeed from "../newsfeed/Newsfeed";
import StockCarousel from "../stock-carousel/StockCarousel";

import { Container } from "@material-ui/core";

// @ts-ignore
export interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  return (
    <Container maxWidth="lg">
      <h1>Home Page</h1>
      <StockCarousel />
      <Newsfeed />
    </Container>
  );
};

export default HomePage;
