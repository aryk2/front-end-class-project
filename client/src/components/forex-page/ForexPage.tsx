import React, { FunctionComponent, useState, useEffect } from "react";
import ForexTable from "../forex-table/ForexTable";
import Candlechart from "../candlechart/Candlechart";
import { Container, Box } from "@material-ui/core";
const fetch = require("node-fetch");
// @ts-ignore
const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

const candleEndpoint =
  "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=";

export interface ForexPageProps {}

export const ForexPage: FunctionComponent<ForexPageProps> = (props) => {
  const [fromCurrencyShort, setFromCurrencyShort] = useState(
    window.localStorage.getItem("fromCurrency")
  );
  const [toCurrencyShort, setToCurrencyShort] = useState(
    window.localStorage.getItem("toCurrency")
  );

  const [isLoadedCandleQuote, setLoadedCandleQuote] = useState(false);
  const [error, setError] = useState(false);
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
    fromCurrencyShort +
    "&to_symbol=" +
    toCurrencyShort +
    "&outputsize=compact&apikey=" +
    apiKey;

  const getCandleInfo = async () => {
    await fetch(candleUrl)
      .then((response: any) => response.json())
      .then((jsonResponse: any) => {
        let temp = JSON.stringify(jsonResponse);
        let openTemp = temp.match(openExp);
        let highTemp = temp.match(highExp);
        let lowTemp = temp.match(lowExp);
        let closeTemp = temp.match(closeExp);
        let datesTemp = temp.match(dateExp);

        let openArr;
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
        setError(true);
      });
  };

  useEffect(() => {
    getCandleInfo();
  }, []);

  if (isLoadedCandleQuote === true) {
    return (
      <div>
        <Candlechart
          open={open}
          close={close}
          low={low}
          high={high}
          dates={dates}
        />
        <ForexTable
          toCurrencyShort={toCurrencyShort!}
          fromCurrencyShort={fromCurrencyShort!}
        />
      </div>
    );
  } else if (error === true) {
    return (
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h1>We cannot find what you are searching for!</h1>
          <br />
          <h1>Please check your search inputs or try again later!</h1>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <Box textAlign="center">
          <h1>Loading...</h1>
        </Box>
      </Container>
    );
  }
};

export default ForexPage;
