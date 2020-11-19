import React, { FunctionComponent } from "react";
import Newsfeed from "../newsfeed/Newsfeed";
import { Grid } from "@material-ui/core";
import LaborInformation from "../labor-information/LaborInformation";
import StockCarousel from "../stock-carousel"
import CurrencyStrength from "../currency-strength/CurrencyStrength";

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
      <Grid item xs={12} style={{paddingRight: 40}}>
        <StockCarousel />
      </Grid>    

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
