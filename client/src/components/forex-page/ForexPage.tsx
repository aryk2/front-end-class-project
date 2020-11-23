import React, { FunctionComponent, useState, useEffect } from "react";
import ForexTable from "../forex-table/ForexTable";
import Candlechart from "../candlechart/Candlechart";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Paper,
} from "@material-ui/core";
import {favoriteItem} from '../../models/favoriteItem'


const fetch = require("node-fetch");
// @ts-ignore
const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const candleEndpoint =
  "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=";

export interface ForexPageProps { // todo fix props
  fromCurrency: string
  toCurrency: string
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
  handleOpenSnackBar: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(0, 0, 5),
  },
  paper: {
    padding: theme.spacing(2, 1),
  },
}));

export const ForexPage: FunctionComponent<ForexPageProps> = (props) => {
  const { fromCurrency, toCurrency } = props;
  const classes = useStyles();


  const [isLoadedCandleQuote, setLoadedCandleQuote] = useState<null | true>(
    null
  );
  const [dates, setDates] = useState<any>([]);

  const [open, setOpen] = useState<any>([]);
  const [close, setClose] = useState<any>([]);
  const [high, setHigh] = useState<any>([]);
  const [low, setLow] = useState<any>([]);

  const openExp = new RegExp(/(open":")[\d.]+"/, "g");
  const highExp = new RegExp(/(high":")[\d.]+"/, "g");
  const lowExp = new RegExp(/(low":")[\d.]+"/, "g");
  const closeExp = new RegExp(/(close":")[\d.]+"/, "g");
  const numExp = new RegExp(/[\d.]+/, "g");
  const dateExp = new RegExp(/[\d]{4}[-][\d]{2}[-][\d]{2}/, "g");

  const candleUrl =
    candleEndpoint +
    fromCurrency +
    "&to_symbol=" +
    toCurrency +
    "&outputsize=compact&apikey=" +
    apiKey;

  useEffect(() => {
    const getCandleInfo = async () => {
      await fetch(candleUrl)
        .then((response: any) => response.json())
        .then((jsonResponse: any) => {
          console.log(jsonResponse)
          let temp = JSON.stringify(jsonResponse);
          let openTemp = temp.match(openExp);
          let highTemp = temp.match(highExp);
          let lowTemp = temp.match(lowExp);
          let closeTemp = temp.match(closeExp);
          let datesTemp = temp.match(dateExp);

          let openArr;

          if(!openTemp?.length) {
            console.error(jsonResponse)
            props.handleOpenSnackBar()
            return
          }

          for (let i = 1; i < openTemp!.length; ++i) {
            openTemp![0] += openTemp![i];
          }
          openArr = openTemp![0].match(numExp);

          let highArr;
          for (let i = 1; i < highTemp!.length; ++i) {
            highTemp![0] += highTemp![i];
          }
          highArr = highTemp![0].match(numExp);

          let lowArr;
          for (let i = 1; i < lowTemp!.length; ++i) {
            lowTemp![0] += lowTemp![i];
          }
          lowArr = lowTemp![0].match(numExp);

          let closeArr;
          for (let i = 1; i < closeTemp!.length; ++i) {
            closeTemp![0] += closeTemp![i];
          }
          closeArr = closeTemp![0].match(numExp);
          setHigh(highArr);
          setLow(lowArr);
          setOpen(openArr);
          setClose(closeArr);
          setDates(datesTemp);
          setLoadedCandleQuote(true);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    if (isLoadedCandleQuote === true) {
      setLoadedCandleQuote(null);
      getCandleInfo();
    } else {
      getCandleInfo();
    }
  }, [candleUrl]);

  return isLoadedCandleQuote ? (
    <div>
      <Box className={classes.root} style={{paddingRight: 40}}>
        <Paper className={classes.paper}>
          <Candlechart
            open={open}
            close={close}
            low={low}
            high={high}
            dates={dates}
          />
        </Paper>
      </Box>
      <Box className={classes.root} style={{paddingRight: 40}}>
        <Paper className={classes.paper}>
          <ForexTable
          toCurrencyShort={toCurrency}
          fromCurrencyShort={fromCurrency}
          favoriteFunctions={props.favoriteFunctions}
          />
        </Paper>
      </Box>
    </div>
  ) : (
    <Container maxWidth="lg">
      <Box justifyContent="Center" alignContent="center">
        Loading...
      </Box>
    </Container>
  );
};

export default ForexPage;
