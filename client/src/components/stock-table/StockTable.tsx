import React, { FunctionComponent } from "react";
import Table, {
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  Grid,
  Box,
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

export const StockTable: FunctionComponent<StockTableProps> = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "#212121" }}
    >
      <Grid item xs={12}>
        <Box borderBottom={1} textAlign="center" style={{ color: "#26c6da" }}>
          <h1>{props.stockName}</h1>
          <h2>Last Updated: {props.date}</h2>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>Current Price</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>Open Price</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>High</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>Low</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>${props.current}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>${props.open}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>${props.high}</h3>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center" style={{ color: "#26c6da" }}>
          <h3>${props.low}</h3>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StockTable;
