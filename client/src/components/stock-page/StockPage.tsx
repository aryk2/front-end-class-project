import React, { FunctionComponent, useState, useEffect } from "react";
import Candlechart from "../candlechart/Candlechart";
import StockTable from "../stock-table/StockTable";
import {favoriteItem} from '../../models/favoriteItem'

const fetch = require("node-fetch");
// @ts-ignore
export interface StockPageProps {
  stock: string
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

export const StockPage: FunctionComponent<StockPageProps> = (props) => {
  const { stock } = props;

  const [open, setOpen] = useState<any>(null);
  const [close, setClose] = useState<any>(null);
  const [high, setHigh] = useState<any>(null);
  const [low, setLow] = useState<any>(null);
  const [dates, setDates] = useState<any>(null);
  const [loaded, setLoaded] = useState<null | true>(null);

  const endpoint =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    stock +
    "&outputsize=compact" +
    "&apikey=" +
    apiKey;

  const openExp = new RegExp(/(open":")[\d.]+"/, "g");
  const highExp = new RegExp(/(close":")[\d.]+"/, "g");
  const lowExp = new RegExp(/(low":")[\d.]+"/, "g");
  const closeExp = new RegExp(/(close":")[\d.]+"/, "g");
  const numExp = new RegExp(/[\d.]+/, "g");
  const dateExp = new RegExp(/[\d]{4}[-][\d]{2}[-][\d]{2}/, "g");

  useEffect(() => {
    const getData = async (endpoint: string) => {
      await fetch(endpoint)
        .then((response: any) => response.json())
        .then(async (jsonResponse: any) => {
          let temp = JSON.stringify(jsonResponse);
          let openTemp = temp.match(openExp);
          let highTemp = temp.match(highExp);
          let lowTemp = temp.match(lowExp);
          let closeTemp = temp.match(closeExp);
          let datesTemp = temp.match(dateExp);

          let openArr = [];
          for (let i = 0; i < openTemp!.length; ++i) {
            openArr.push(openTemp![i].match(numExp));
          }

          let highArr = [];
          for (let i = 0; i < highTemp!.length; ++i) {
            highArr.push(highTemp![i].match(numExp));
          }

          let lowArr = [];
          for (let i = 0; i < lowTemp!.length; ++i) {
            lowArr.push(lowTemp![i].match(numExp));
          }

          let closeArr = [];
          for (let i = 0; i < closeTemp!.length; ++i) {
            closeArr.push(closeTemp![i].match(numExp));
          }
          setOpen(openArr);
          setClose(closeArr);
          setLow(lowArr);
          setHigh(highArr);
          setDates(datesTemp);
          setLoaded(true);
        })
        .catch((err: any) => {
          console.error(err);
        });
    };
    if (loaded === true) {
      setLoaded(null);
      getData(endpoint);
    } else {
      getData(endpoint);
    }
  }, [stock]);

  return loaded ? (
    <div>
      <Candlechart
        open={open}
        close={close}
        high={high}
        low={low}
        dates={dates}
      />
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
    </div>
  ) : (
    <h1></h1>
  );
};
/*

        */
export default StockPage;
