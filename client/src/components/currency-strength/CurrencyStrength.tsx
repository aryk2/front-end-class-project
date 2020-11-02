import React, { FunctionComponent, useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import ApexCharts from "apexcharts";
import ExchangeRateChart from "../exchange-rate-chart";
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const usdConversionValues =
  "https://finnhub.io/api/v1/forex/rates?base=USD&token=" + apiKey;
// @ts-ignore
export interface CurrencyStrengthProps {}

export const CurrencyStrength: FunctionComponent<CurrencyStrengthProps> = (
  props
) => {
  const [isLoaded, setLoading] = useState(false);
  const [CAD, setCAD] = useState(0);
  const [GBP, setGBP] = useState(0);

  const [KWD, setKWD] = useState(0);
  const [EUR, setEUR] = useState(0);

  const getData = async () => {
    await fetch(usdConversionValues)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(true);
        setCAD(jsonResponse.quote.CAD.toFixed(2));
        setGBP(jsonResponse.quote.GBP.toFixed(2));
        setKWD(jsonResponse.quote.KWD.toFixed(2));
        setEUR(jsonResponse.quote.EUR.toFixed(2));
      })
      .catch((error: any) => {
        console.error(error);
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

  if (isLoaded === false) {
    return <h1></h1>;
  } else {
    return <ExchangeRateChart CAD={CAD} GBP={GBP} KWD={KWD} EUR={EUR} />;
  }
};

export default CurrencyStrength;
