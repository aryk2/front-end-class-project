import React, { FunctionComponent } from "react";
import Chart from "react-apexcharts";
import { Container } from "@material-ui/core";
// @ts-ignore
export interface UnemploymentChartProps {
  oct2020: string | number;
  sept2020: string | number;
  aug2020: string | number;
  july2020: string | number;
  june2020: string | number;
  may2020: string | number;
  april2020: string | number;
  march2020: string | number;
  feb2020: string | number;
  jan2020: string | number;

  oct2019: string | number;
  sept2019: string | number;
  aug2019: string | number;
  july2019: string | number;
  june2019: string | number;
  may2019: string | number;
  april2019: string | number;
  march2019: string | number;
  feb2019: string | number;
  jan2019: string | number;
}

export const UnemploymentChart: FunctionComponent<UnemploymentChartProps> = (
  props
) => {
  const options = {
    chart: {
      height: "50%",
      width: "50%",
      foreColor: "#333333",
    },
    title: {
      text: "2019-2020 US Unemployment Statistics",
      align: "left",
      style: {
        color: "black",
      },
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ],
      labels: {
        style: {
          colors: [
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
          ],
        },
      },
    },
    legend: {
      labels: {
        colors: "black",
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["black"],
        },
      },
    },
    colors: ["#e53935", "#007bff"],
  };

  const series = [
    {
      name: "Percentage of US population that was unemployed in 2020",
      data: [
        props.jan2020,
        props.feb2020,
        props.march2020,
        props.april2020,
        props.may2020,
        props.june2020,
        props.july2020,
        props.aug2020,
        props.sept2020,
        props.oct2020,
      ],
    },
    {
      name: "Percentage of US population that was unemployed in 2019",
      data: [
        props.jan2019,
        props.feb2019,
        props.march2019,
        props.april2019,
        props.may2019,
        props.june2019,
        props.july2019,
        props.aug2019,
        props.sept2019,
        props.oct2019,
      ],
    },
  ];
  return (
    <Chart
      type="line"
      options={options}
      series={series}
      height="300"
      width="100%"
    />
  );
};

export default UnemploymentChart;
