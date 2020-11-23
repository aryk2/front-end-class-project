import React, { FunctionComponent, useState } from "react";
import {  Grid, Box } from "@material-ui/core";
import {favoriteItem} from '../../models/favoriteItem'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

// @ts-ignore
export interface StockTableProps {
  open: string;
  current: string;
  high: string;
  low: string;
  previousClose: string;
  stockName: string;
  date: string;
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

const isFavorite = (favorites: favoriteItem[], symbol: string): boolean => {
  if (!favorites) return false
  const favoritesList: favoriteItem[] = favorites.filter((favorite) => favorite.symbol === symbol)
  return !!favoritesList.length
}

export const StockTable: FunctionComponent<StockTableProps> = (props) => {
  const {favorites, handleAddFavorite, handleRemoveFavorite} = props.favoriteFunctions
  const [favorite, setFavorite] = useState<boolean>(isFavorite(favorites, props.stockName))

  const handleFavoriteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked)
    if(event.target.checked) {
      handleAddFavorite({symbol: props.stockName})
      return
    }
    handleRemoveFavorite({symbol: props.stockName})
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          style={{marginLeft: 20}}
          >            
          <FormControlLabel
            control={<Checkbox checked={favorite} onChange={handleFavoriteChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            label="Favorite"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box borderBottom={1} textAlign="center">
          <h1>{props.stockName}</h1>
          <h2>
            Last Updated: {props.date}

          </h2>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>Current Price</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>Open Price</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>High</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>Low</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>${props.current}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>${props.open}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>${props.high}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <h3>${props.low}</h3>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StockTable;
