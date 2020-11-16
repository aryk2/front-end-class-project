import React, { FunctionComponent } from "react";
import Newsfeed from "../newsfeed/Newsfeed";
import { Container } from "@material-ui/core";

// @ts-ignore
export interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  return (
    <Container maxWidth="lg">
      <h1>Home Page</h1>
      <Newsfeed />
    </Container>
  );
};

export default HomePage;
