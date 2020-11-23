import React, { FunctionComponent, useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import {favoriteItem} from '../../models/favoriteItem'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import fetch from "node-fetch";
// @ts-ignore
export interface ForexTableProps {
  fromCurrencyShort: string;
  toCurrencyShort: string;
}

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
const quoteEndpoint =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

export const ForexTable: FunctionComponent<ForexTableProps> = (props) => {
  const [fromCurrencyShort, setFromCurrencyShort] = useState(
    props.fromCurrencyShort
  );
  const [toCurrencyShort, setToCurrencyShort] = useState(props.toCurrencyShort);
  const [fromCurrencyLong, setFromCurrencyLong] = useState("");
  const [toCurrencyLong, setToCurrencyLong] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [bid, setBid] = useState("");
  const [ask, setAsk] = useState("");
  const [isLoadedCurrentQuote, setLoadedCurrentQuote] = useState(false);

  const quoteUrl =
    quoteEndpoint +
    props.fromCurrencyShort +
    "&to_currency=" +
    props.toCurrencyShort +
    "&apikey=" +
    apiKey;

  const getCurrentQuote = async () => {
    await fetch(quoteUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setFromCurrencyLong(
          jsonResponse["Realtime Currency Exchange Rate"][
            "2. From_Currency Name"
          ]
        );
        setToCurrencyLong(
          jsonResponse["Realtime Currency Exchange Rate"]["4. To_Currency Name"]
        );
        setAsk(jsonResponse["Realtime Currency Exchange Rate"]["9. Ask Price"]);
        setBid(jsonResponse["Realtime Currency Exchange Rate"]["8. Bid Price"]);

        let temp =
          jsonResponse["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        temp = Number(temp);
        temp = temp.toFixed(3);
        temp = temp.toString();
        setExchangeRate(temp);
        setLoadedCurrentQuote(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLoadedCurrentQuote === false) {
      getCurrentQuote();
      return;
    } else {
      return;
    }
  }, []);

  if (isLoadedCurrentQuote === true) {
    return (
      <Grid
        container
        spacing={0}
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
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
              label="Favorite"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box borderBottom={1} textAlign="center" style={{ color: "black" }}>
            <h1>
              {fromCurrencyLong} to {toCurrencyLong}
            </h1>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>Bid Price</h2>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>Ask Price</h2>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>Exchange Rate</h2>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>${bid}</h2>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>${ask}</h2>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ color: "black" }}>
          <Box textAlign="center">
            <h2>
              1 {fromCurrencyShort} is equivalent to ${exchangeRate}{" "}
              {toCurrencyShort}
            </h2>
          </Box>
        </Grid>
      </Grid>
    );
  } else {
    return <h1></h1>;
  }
};

export default ForexTable;
