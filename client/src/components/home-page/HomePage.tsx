import React, { FunctionComponent } from "react";
import Newsfeed from "../newsfeed/Newsfeed";
import { Grid } from "@material-ui/core";
import LaborInformation from "../labor-information/LaborInformation";
import StockCarousel from "../stock-carousel"
import CurrencyStrength from "../currency-strength/CurrencyStrength";
import {favoriteItem} from '../../models/favoriteItem'
import {PageProps} from '../../models/pageProps'

// @ts-ignore
export interface HomePageProps extends PageProps {
  test?: boolean
  homePageProps: {
    favoriteItems: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  const {favoriteItems} = props.homePageProps


  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignContent="center"
      spacing={1}
      style={{paddingRight: 40}}
    >
      <Grid item xs={12}>
        {!!!props.test ? 
          <StockCarousel favoriteItems={favoriteItems} searchProps={props.searchProps}/> 
        : 
          null
        }
      </Grid>    

      <Grid item xs={12}>
        <LaborInformation />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CurrencyStrength />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Newsfeed />
      </Grid>
    </Grid>
  );
};

export default HomePage;
