import React, { FunctionComponent } from "react";
import Chart from "react-apexcharts";

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
      data: [props.CAD, props.GBP, props.KWD, props.EUR],
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
