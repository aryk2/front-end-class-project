import React, { FunctionComponent } from "react";
import Table, {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
// @ts-ignore
export interface ForexTableProps {
  toShort: string;
  toLong: string;
  fromShort: string;
  fromLong: string;
  bid: string | number;
  ask: string | number;
  exchangeRate: string | number;
}

export const ForexTable: FunctionComponent<ForexTableProps> = (props) => {
  const toShort = props.toShort;
  const toLong = props.toLong;

  const fromShort = props.fromShort;
  const fromLong = props.fromLong;
  const bid = props.bid;
  const ask = props.ask;
  const exchangeRate = props.exchangeRate;

  return (
    <TableContainer>
      <h1>
        {fromLong} to {toLong}
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
          1 {fromShort} is equivalent to ${exchangeRate} {toShort}
        </TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default ForexTable;
