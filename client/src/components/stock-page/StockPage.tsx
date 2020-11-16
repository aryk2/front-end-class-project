import React, { FunctionComponent, useState, useEffect } from "react";
import Candlechart from "../candlechart/Candlechart";
import StockTable from "../stock-table/StockTable";
import {Container, Box} from "@material-ui/core";
import SearchBar from "../search-bar/SearchBar";
const fetch = require("node-fetch");
// @ts-ignore
export interface StockPageProps {}

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

export const StockPage: FunctionComponent<StockPageProps> = (props) => {
  const [stock, setStock] = useState(window.localStorage.getItem("stock"));
  const [isLoaded, setLoaded] = useState(false);
  const [open, setOpen] = useState<any>([]);
  const [close, setClose] = useState<any>([]);
  const [high, setHigh] = useState<any>([]);
  const [low, setLow] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const [error, setError] = useState(false);
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
  const getData = async (endpoint: string) => {
    await fetch(endpoint)
      .then((response: any) => response.json())
      .then((jsonResponse: any) => {
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
        setError(true);
      });
  };

  useEffect(() => {
    if (isLoaded === false) {
      getData(endpoint);
      return;
    } else {
      return;
    }
  }, []);

  if (isLoaded === true) {
    let o = open[0];
    let h = high[0];
    let l = low[0];
    let c = close[0];
    let d = dates[0];
    console.log(dates);
    return (
      <div>
        <Candlechart
          open={open}
          close={close}
          high={high}
          low={low}
          dates={dates}
        />
        <StockTable
          open={o}
          high={h}
          low={l}
          previousClose={c}
          stockName={stock!}
          date={d}
          current={o}
        />
      </div>
    );
  } else if (error === true) {
    return (
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h1>It seems as though we can't find results for your search</h1>
          <br />
          <h1>Please check your search query or try again later</h1>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h1>Loading your results!</h1>
        </Box>
      </Container>
    );
  }
};
/*

        */
export default StockPage;
