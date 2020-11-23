import React, { FunctionComponent } from "react";
import Chart from "react-apexcharts";
const fetch = require("node-fetch");
// @ts-ignore
export interface ExchangeRateChartProps {
  CAD: string | number;
  GBP: string | number;
  KWD: string | number;
  EUR: string | number;
}

export const ExchangeRateChart: FunctionComponent<ExchangeRateChartProps> = (
  props
) => {
  const CAD = props.CAD;
  const GBP = props.GBP;
  const KWD = props.KWD;
  const EUR = props.EUR;
  const options = {
    chart: {
      height: "300",
      width: "100%",
      foreColor: "black",
    },
    title: {
      text: "Popularly traded currencies compared to USD",
      align: "left",
      style: {
        color: "black",
      },
    },
    xaxis: {
      categories: ["Canadian Dollar", "British Pound", "Kuwaiti Dinar", "Euro"],
    },

    fill: {
      colors: ["#d32f2f", "#8e24aa", "#ffeb3b", "#1976d2"],
    },
  };

  const series = [
    {
      name: "Amount of currency equal to 1 USD",
      data: [CAD, GBP, KWD, EUR],
    },
  ];

  return (
    <Chart
      type="bar"
      options={options}
      series={series}
      height="300"
      width="100%"
    />
  );
};

export default ExchangeRateChart;
