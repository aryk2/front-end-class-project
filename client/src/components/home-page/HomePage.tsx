import React, { FunctionComponent } from "react";
import Newsfeed from "../newsfeed";
import { Container, Grid } from "@material-ui/core";
import LaborInformation from "../labor-information";

import CurrencyStrength from "../currency-strength";

// @ts-ignore
export interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignContent="center"
      spacing={1}
    >
      <Grid item xs={6}>
        <LaborInformation />
      </Grid>
      <Grid item xs={6}>
        <CurrencyStrength />
      </Grid>
      <Grid item xs={6}>
        <Newsfeed />
      </Grid>
    </Grid>
  );
};

export default HomePage;
