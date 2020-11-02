import React, { FunctionComponent } from "react";
import Chart from "react-apexcharts";
// @ts-ignore
export interface UnemploymentChartProps {
  sept2020: string | number;
  aug2020: string | number;
  july2020: string | number;
  june2020: string | number;
  may2020: string | number;
  april2020: string | number;
  march2020: string | number;
  feb2020: string | number;
  jan2020: string | number;

  sept2019: string | number;
  aug2019: string | number;
  july2019: string | number;
  june2019: string | number;
  may2019: string | number;
  april2019: string | number;
  march2019: string | number;
  feb2019: string | number;
  jan2019: string | number;

  sept2018: string | number;
  aug2018: string | number;
  july2018: string | number;
  june2018: string | number;
  may2018: string | number;
  april2018: string | number;
  march2018: string | number;
  feb2018: string | number;
  jan2018: string | number;
}

export const UnemploymentChart: FunctionComponent<UnemploymentChartProps> = (
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
      ],
    },
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
      ],
    },
    {
      name: "Percentage of US population that was unemployed in 2018",
      data: [
        props.jan2018,
        props.feb2018,
        props.march2018,
        props.april2018,
        props.may2018,
        props.june2018,
        props.july2018,
        props.aug2018,
        props.sept2018,
      ],
    },
  ];
  return (
    <div>
      <Chart
        type="line"
        options={options}
        series={series}
        height="300"
        width="50%"
      />
    </div>
  );
};

export default UnemploymentChart;
