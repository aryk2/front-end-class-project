import React, { FunctionComponent, useState, useEffect } from "react";
import ForexTable from "../forex-table";
// @ts-ignore
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const endpoint =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

export interface ForexPageProps {
  from: string;
  to: string;
}

export const ForexPage: FunctionComponent<ForexPageProps> = (props) => {
  const [fromCurrencyShort, setFromCurrencyShort] = useState(props.from);
  const [toCurrencyShort, setToCurrencyShort] = useState(props.to);
  const [isLoaded, setLoaded] = useState(false);
  const [fromCurrencyLong, setFromCurrencyLong] = useState("");
  const [toCurrencyLong, setToCurrencyLong] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [bid, setBid] = useState("");
  const [ask, setAsk] = useState("");

  const url =
    endpoint +
    fromCurrencyShort +
    "&to_currency=" +
    toCurrencyShort +
    "&apikey=" +
    apiKey;

  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setFromCurrencyLong(
          jsonResponse["Realtime Currency Exchange Rate"]["From_Currency Name"]
        );
        setToCurrencyLong(
          jsonResponse["Realtime Currency Exchange Rate"]["To_Currency Name"]
        );
        setAsk(jsonResponse["Realtime Currency Exchange Rate"]["Ask Price"]);
        setBid(jsonResponse["Realtime Currency Exchange Rate"]["Bid Price"]);
        setExchangeRate(
          jsonResponse["Realtime Currency Exchange Rate"]["Exchange Rate"]
        );
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isLoaded === false) {
      getData();
      return;
    } else {
      return;
    }
  }, []);

  if (isLoaded === true) {
    return (
      <ForexTable
        toShort={toCurrencyShort}
        toLong={toCurrencyLong}
        fromShort={fromCurrencyShort}
        fromLong={fromCurrencyLong}
        bid={bid}
        ask={ask}
        exchangeRate={exchangeRate}
      />
    );
  } else {
    return <h1></h1>;
  }
};

export default ForexPage;
