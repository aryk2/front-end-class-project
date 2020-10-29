import React, { FunctionComponent, useState, useEffect } from "react";

// @ts-ignore
export interface StockPageProps {
  stock: string;
}

const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;

export const StockPage: FunctionComponent<StockPageProps> = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [isLoaded, setLoaded] = useState(false);
  const [open, setOpen] = useState<any>([]);
  const [close, setClose] = useState<any>([]);
  const [high, setHigh] = useState<any>([]);
  const [low, setLow] = useState<any>([]);

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

  const getData = async (endpoint: string) => {
    await fetch(endpoint)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoaded(true);
        console.log(jsonResponse);
        let temp = JSON.stringify(jsonResponse);
        let openTemp = temp.match(openExp);
        let highTemp = temp.match(highExp);
        let lowTemp = temp.match(lowExp);
        let closeTemp = temp.match(closeExp);

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

  if (isLoaded === true) {
    //console.log(data);
    return <h1>We got it</h1>;
  } else {
    return <h1>Nope</h1>;
  }
};

export default StockPage;
