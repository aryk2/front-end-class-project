import React, { FunctionComponent, useState, useEffect } from "react";

// @ts-ignore
export interface StockPageProps {
  stock: string;
}

const apiKey = process.env.REACT_APP_FINNHUB_KEY;

export const StockPage: FunctionComponent<StockPageProps> = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [isLoaded, setLoaded] = useState(false);

  let timestamp = new Date();
  const currentTime = timestamp.getTime();
  const oneMonthAgo = currentTime - 2629743;

  const endpoint =
    "https://finnhub.io/api/v1/stock/candle?symbol=" +
    stock +
    "&resolution=M&from=" +
    currentTime +
    "&to=" +
    oneMonthAgo +
    "&token=";

  const getData = async (endpoint: string) => {
    await fetch(endpoint)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoaded(true);
        console.log(jsonResponse);
      })
      .catch((error: any) => {
        console.error(error);
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

  return <h1></h1>;
};

export default StockPage;
