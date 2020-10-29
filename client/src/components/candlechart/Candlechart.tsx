import React, { FunctionComponent } from "react";
import { Container } from "@material-ui/core";
import Chart from "react-apexcharts";
// @ts-ignore
export interface CandlechartProps {
  open: any[];
  close: any[];
  high: any[];
  low: any[];
  dates: any[];
  symbol: string;
}

export const Candlechart: FunctionComponent<CandlechartProps> = (props) => {
  //x = dates
  //y = [open, high, low, close]
  const stock = props.symbol;

  const str = stock + ": 30 days of trading data";
  console.log(props.symbol);
  const options = {
    chart: {
      type: "candlestick",
    },
    title: {
      text: str,
      align: "left",
    },
    /*
    xaxis: {
      type: "datetime",
    },
    */
  };

  const series = [
    {
      data: [
        {
          x: new Date(props.dates[0]),
          y: [props.open[0], props.high[0], props.low[0], props.close[0]],
        },
        {
          x: new Date(props.dates[1]),
          y: [props.open[1], props.high[1], props.low[1], props.close[1]],
        },
        {
          x: new Date(props.dates[2]),
          y: [props.open[2], props.high[2], props.low[2], props.close[2]],
        },
        {
          x: new Date(props.dates[3]),
          y: [props.open[3], props.high[3], props.low[3], props.close[3]],
        },
        {
          x: new Date(props.dates[4]),
          y: [props.open[4], props.high[4], props.low[4], props.close[4]],
        },
        {
          x: new Date(props.dates[5]),
          y: [props.open[5], props.high[5], props.low[5], props.close[5]],
        },
        {
          x: new Date(props.dates[6]),
          y: [props.open[6], props.high[6], props.low[6], props.close[6]],
        },
        {
          x: new Date(props.dates[7]),
          y: [props.open[7], props.high[7], props.low[7], props.close[7]],
        },
        {
          x: new Date(props.dates[8]),
          y: [props.open[8], props.high[8], props.low[8], props.close[8]],
        },
        {
          x: new Date(props.dates[9]),
          y: [props.open[9], props.high[9], props.low[9], props.close[9]],
        },
        {
          x: new Date(props.dates[10]),
          y: [props.open[10], props.high[10], props.low[10], props.close[10]],
        },
        {
          x: new Date(props.dates[11]),
          y: [props.open[11], props.high[11], props.low[11], props.close[11]],
        },
        {
          x: new Date(props.dates[12]),
          y: [props.open[12], props.high[12], props.low[12], props.close[12]],
        },
        {
          x: new Date(props.dates[13]),
          y: [props.open[13], props.high[13], props.low[13], props.close[13]],
        },
        {
          x: new Date(props.dates[14]),
          y: [props.open[14], props.high[14], props.low[14], props.close[14]],
        },
        {
          x: new Date(props.dates[15]),
          y: [props.open[15], props.high[15], props.low[15], props.close[15]],
        },
        {
          x: new Date(props.dates[16]),
          y: [props.open[16], props.high[16], props.low[16], props.close[16]],
        },
        {
          x: new Date(props.dates[17]),
          y: [props.open[17], props.high[17], props.low[17], props.close[17]],
        },
        {
          x: new Date(props.dates[18]),
          y: [props.open[18], props.high[18], props.low[18], props.close[18]],
        },
        {
          x: new Date(props.dates[19]),
          y: [props.open[19], props.high[19], props.low[19], props.close[19]],
        },
        {
          x: new Date(props.dates[20]),
          y: [props.open[20], props.high[20], props.low[20], props.close[20]],
        },
        {
          x: new Date(props.dates[21]),
          y: [props.open[21], props.high[21], props.low[21], props.close[21]],
        },
        {
          x: new Date(props.dates[22]),
          y: [props.open[22], props.high[22], props.low[22], props.close[22]],
        },
        {
          x: new Date(props.dates[23]),
          y: [props.open[23], props.high[23], props.low[23], props.close[23]],
        },
        {
          x: new Date(props.dates[24]),
          y: [props.open[24], props.high[24], props.low[24], props.close[24]],
        },
        {
          x: new Date(props.dates[25]),
          y: [props.open[25], props.high[25], props.low[25], props.close[25]],
        },
        {
          x: new Date(props.dates[26]),
          y: [props.open[26], props.high[26], props.low[26], props.close[26]],
        },
        {
          x: new Date(props.dates[27]),
          y: [props.open[27], props.high[27], props.low[27], props.close[27]],
        },
        {
          x: new Date(props.dates[28]),
          y: [props.open[28], props.high[28], props.low[28], props.close[28]],
        },
        {
          x: new Date(props.dates[29]),
          y: [props.open[29], props.high[29], props.low[29], props.close[29]],
        },
      ],
    },
  ];

  return (
    <Chart
      type="candlestick"
      height="300"
      width="100%"
      series={series}
      options={options}
    />
  );
};

export default Candlechart;
