import React, { FunctionComponent, useState, useEffect } from "react";
import Table, {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
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
      <TableContainer>
        <h1>
          {fromCurrencyLong} to {toCurrencyLong}
        </h1>
        <TableHead>
          <TableRow>
            <TableCell>Bid Price</TableCell>
            <TableCell>Ask Price</TableCell>
            <TableCell>Exchange Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>${bid}</TableCell>
          <TableCell>${ask}</TableCell>
          <TableCell>
            1 {fromCurrencyShort} is equivalent to ${exchangeRate}{" "}
            {toCurrencyShort}
          </TableCell>
        </TableRow>
      </TableContainer>
    );
  } else {
    return <h1></h1>;
  }
};

export default ForexTable;
