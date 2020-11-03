import React, { FunctionComponent } from "react";
import Table, {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
// @ts-ignore
export interface StockTableProps {
  open: string;
  current: string;
  high: string;
  low: string;
  previousClose: string;
  stockName: string;
  date: string;
}

const url = "https://www.finnhub.io/api/v1/quote?symbol=";
export const StockTable: FunctionComponent<StockTableProps> = (props) => {
  return (
    <TableContainer>
      <h1>{props.stockName}</h1>
      <h2>Last Updated: {props.date}</h2>
      <TableHead>
        <TableRow>
          <TableCell>Current Price</TableCell>
          <TableCell>Open Price</TableCell>
          <TableCell>High</TableCell>
          <TableCell>Low</TableCell>
          <TableCell>Previous Close</TableCell>
        </TableRow>
      </TableHead>
      <TableRow>
        <TableCell>${props.current}</TableCell>
        <TableCell>${props.open}</TableCell>
        <TableCell>${props.high}</TableCell>
        <TableCell>${props.low}</TableCell>
        <TableCell>${props.previousClose}</TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default StockTable;
