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
      height: "50%",
      width: "50%",
      background: "#f4f4f4",
      foreColor: "#333333",
    },
    xaxis: {
      categories: ["Canadian Dollar", "British Pound", "Kuwaiti Dinar", "Euro"],
    },
  };

  const series = [
    {
      name: "Amount of currency equal to 1 USD",
      data: [CAD, GBP, KWD, EUR],
    },
  ];

  return (
    <div>
      <Chart
        type="bar"
        options={options}
        series={series}
        height="300"
        width="50%"
      />
    </div>
  );
};

export default ExchangeRateChart;
