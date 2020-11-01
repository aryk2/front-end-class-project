import React, { FunctionComponent, useState, useEffect } from "react";
import Table from "@material-ui/core";
// @ts-ignore
export interface StockTableProps {
  stock: string;
}
const apiKey = process.env.REACT_APP_FUNNHUB_KEY;

const url = "https://www.finnhub.io/api/v1/quote?symbol=";
export const StockTable: FunctionComponent<StockTableProps> = (props) => {
  const [isLoaded, setLoaded] = useState(false);
  const [stock, setStock] = useState(props.stock);
  const [previousClose, setPreviousClose] = useState(null);
  const [open, setOpen] = useState(null);
  const [current, setCurrent] = useState(null);
  const [high, setHigh] = useState(null);
  const [low, setLow] = useState(null);

  useEffect(() => {}, []);

  if (isLoaded === false) {
  } else {
  }
  return <></>;
};

export default StockTable;
