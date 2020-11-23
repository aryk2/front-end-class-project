import React, { FunctionComponent, useState, useEffect } from "react";
import Candlechart from "../candlechart/Candlechart";
import StockTable from "../stock-table/StockTable";
import {favoriteItem} from '../../models/favoriteItem'
import {
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import useStock from '../../hooks/useStock'
// @ts-ignore
export interface StockPageProps {
  stock: string
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(0, 0, 5),
  },
  paper: {
    padding: theme.spacing(2, 1),
  },
}));


export const StockPage: FunctionComponent<StockPageProps> = (props) => {
  const { stock } = props;
  const {
    open, 
    close, 
    high, 
    low,
    dates, 
    loaded
  } = useStock(stock)
  const classes = useStyles();

  return loaded ? (
    <div>
      <Box className={classes.root} style={{paddingRight: 40}}>
        <Paper className={classes.paper}>
          <Candlechart
            open={open}
            close={close}
            high={high}
            low={low}
            dates={dates}
          />
        </Paper>
      </Box>
      <Box className={classes.root} style={{paddingRight: 40}}>
        <Paper className={classes.paper}>
          <StockTable
          open={open[0]}
          high={high[0]}
          low={low[0]}
          previousClose={close[0]}
          stockName={stock}
          date={dates[0]}
          current={open[0]}
          favoriteFunctions={props.favoriteFunctions}
        />
        </Paper>
      </Box>
    </div>
  ) : (
    <h1></h1>
  );
};
/*

        */
export default StockPage;
