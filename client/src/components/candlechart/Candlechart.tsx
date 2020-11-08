import React, { FunctionComponent } from "react";
import { Container, Box } from "@material-ui/core";
import Chart from "react-apexcharts";
// @ts-ignore
export interface CandlechartProps {
  open: any[];
  close: any[];
  high: any[];
  low: any[];
  dates: any[];
}

export const Candlechart: FunctionComponent<CandlechartProps> = (props) => {
  //x = dates
  //y = [open, high, low, close]

  const options = {
    chart: {
      type: "candlestick",
    },
    title: {
      text: "30 days of trading data",
      align: "left",
    },

    xaxis: {
      type: "category",
    },
  };

  const series = [
    {
      data: [
        {
          x: props.dates[69],
          y: [props.open[69], props.high[69], props.low[69], props.close[69]],
        },
        {
          x: props.dates[68],
          y: [props.open[68], props.high[68], props.low[68], props.close[68]],
        },
        {
          x: props.dates[67],
          y: [props.open[67], props.high[67], props.low[67], props.close[67]],
        },
        {
          x: props.dates[66],
          y: [props.open[66], props.high[66], props.low[66], props.close[66]],
        },
        {
          x: props.dates[65],
          y: [props.open[65], props.high[65], props.low[65], props.close[65]],
        },
        {
          x: props.dates[64],
          y: [props.open[64], props.high[64], props.low[64], props.close[64]],
        },
        {
          x: props.dates[63],
          y: [props.open[63], props.high[63], props.low[63], props.close[63]],
        },
        {
          x: props.dates[62],
          y: [props.open[62], props.high[62], props.low[62], props.close[62]],
        },
        {
          x: props.dates[61],
          y: [props.open[61], props.high[61], props.low[61], props.close[61]],
        },
        {
          x: props.dates[60],
          y: [props.open[60], props.high[60], props.low[60], props.close[60]],
        },
        {
          x: props.dates[59],
          y: [props.open[59], props.high[59], props.low[59], props.close[59]],
        },
        {
          x: props.dates[58],
          y: [props.open[58], props.high[58], props.low[58], props.close[58]],
        },
        {
          x: props.dates[57],
          y: [props.open[57], props.high[57], props.low[57], props.close[57]],
        },
        {
          x: props.dates[56],
          y: [props.open[56], props.high[56], props.low[56], props.close[56]],
        },
        {
          x: props.dates[55],
          y: [props.open[55], props.high[55], props.low[55], props.close[55]],
        },
        {
          x: props.dates[54],
          y: [props.open[54], props.high[54], props.low[54], props.close[54]],
        },
        {
          x: props.dates[53],
          y: [props.open[53], props.high[53], props.low[53], props.close[53]],
        },
        {
          x: props.dates[52],
          y: [props.open[52], props.high[52], props.low[52], props.close[52]],
        },
        {
          x: props.dates[51],
          y: [props.open[51], props.high[51], props.low[51], props.close[51]],
        },
        {
          x: props.dates[50],
          y: [props.open[50], props.high[50], props.low[50], props.close[50]],
        },
        {
          x: props.dates[49],
          y: [props.open[49], props.high[49], props.low[49], props.close[49]],
        },
        {
          x: props.dates[48],
          y: [props.open[48], props.high[48], props.low[48], props.close[48]],
        },
        {
          x: props.dates[47],
          y: [props.open[47], props.high[47], props.low[47], props.close[47]],
        },
        {
          x: props.dates[46],
          y: [props.open[46], props.high[46], props.low[46], props.close[46]],
        },
        {
          x: props.dates[45],
          y: [props.open[45], props.high[45], props.low[45], props.close[45]],
        },
        {
          x: props.dates[44],
          y: [props.open[44], props.high[44], props.low[44], props.close[44]],
        },
        {
          x: props.dates[43],
          y: [props.open[43], props.high[43], props.low[43], props.close[43]],
        },
        {
          x: props.dates[42],
          y: [props.open[42], props.high[42], props.low[42], props.close[42]],
        },
        {
          x: props.dates[41],
          y: [props.open[41], props.high[41], props.low[41], props.close[41]],
        },
        {
          x: props.dates[40],
          y: [props.open[40], props.high[40], props.low[40], props.close[40]],
        },
        {
          x: props.dates[39],
          y: [props.open[39], props.high[39], props.low[39], props.close[39]],
        },
        {
          x: props.dates[38],
          y: [props.open[38], props.high[38], props.low[38], props.close[38]],
        },
        {
          x: props.dates[37],
          y: [props.open[37], props.high[37], props.low[37], props.close[37]],
        },
        {
          x: props.dates[36],
          y: [props.open[36], props.high[36], props.low[36], props.close[36]],
        },
        {
          x: props.dates[35],
          y: [props.open[35], props.high[35], props.low[35], props.close[35]],
        },
        {
          x: props.dates[34],
          y: [props.open[34], props.high[34], props.low[34], props.close[34]],
        },
        {
          x: props.dates[33],
          y: [props.open[33], props.high[33], props.low[33], props.close[33]],
        },
        {
          x: props.dates[32],
          y: [props.open[32], props.high[32], props.low[32], props.close[32]],
        },
        {
          x: props.dates[31],
          y: [props.open[31], props.high[31], props.low[31], props.close[31]],
        },
        {
          x: props.dates[30],
          y: [props.open[30], props.high[30], props.low[30], props.close[30]],
        },
        {
          x: props.dates[29],
          y: [props.open[29], props.high[29], props.low[29], props.close[29]],
        },
        {
          x: props.dates[28],
          y: [props.open[28], props.high[28], props.low[28], props.close[28]],
        },
        {
          x: props.dates[27],
          y: [props.open[27], props.high[27], props.low[27], props.close[27]],
        },
        {
          x: props.dates[26],
          y: [props.open[26], props.high[26], props.low[26], props.close[26]],
        },
        {
          x: props.dates[25],
          y: [props.open[25], props.high[25], props.low[25], props.close[25]],
        },
        {
          x: props.dates[24],
          y: [props.open[24], props.high[24], props.low[24], props.close[24]],
        },
        {
          x: props.dates[23],
          y: [props.open[23], props.high[23], props.low[23], props.close[23]],
        },
        {
          x: props.dates[22],
          y: [props.open[22], props.high[22], props.low[22], props.close[22]],
        },
        {
          x: props.dates[21],
          y: [props.open[21], props.high[21], props.low[21], props.close[21]],
        },
        {
          x: props.dates[20],
          y: [props.open[20], props.high[20], props.low[20], props.close[20]],
        },
        {
          x: props.dates[19],
          y: [props.open[19], props.high[19], props.low[19], props.close[19]],
        },
        {
          x: props.dates[18],
          y: [props.open[18], props.high[18], props.low[18], props.close[18]],
        },
        {
          x: props.dates[17],
          y: [props.open[17], props.high[17], props.low[17], props.close[17]],
        },
        {
          x: props.dates[16],
          y: [props.open[16], props.high[16], props.low[16], props.close[16]],
        },
        {
          x: props.dates[15],
          y: [props.open[15], props.high[15], props.low[15], props.close[15]],
        },
        {
          x: props.dates[14],
          y: [props.open[14], props.high[14], props.low[14], props.close[14]],
        },
        {
          x: props.dates[13],
          y: [props.open[13], props.high[13], props.low[13], props.close[13]],
        },
        {
          x: props.dates[12],
          y: [props.open[12], props.high[12], props.low[12], props.close[12]],
        },
        {
          x: props.dates[11],
          y: [props.open[11], props.high[11], props.low[11], props.close[11]],
        },
        {
          x: props.dates[10],
          y: [props.open[10], props.high[10], props.low[10], props.close[10]],
        },
        {
          x: props.dates[9],
          y: [props.open[9], props.high[9], props.low[9], props.close[9]],
        },
        {
          x: props.dates[8],
          y: [props.open[8], props.high[8], props.low[8], props.close[8]],
        },
        {
          x: props.dates[7],
          y: [props.open[7], props.high[7], props.low[7], props.close[7]],
        },
        {
          x: props.dates[6],
          y: [props.open[6], props.high[6], props.low[6], props.close[6]],
        },
        {
          x: props.dates[5],
          y: [props.open[5], props.high[5], props.low[5], props.close[5]],
        },
        {
          x: props.dates[4],
          y: [props.open[4], props.high[4], props.low[4], props.close[4]],
        },
        {
          x: props.dates[3],
          y: [props.open[3], props.high[3], props.low[3], props.close[3]],
        },
        {
          x: props.dates[2],
          y: [props.open[2], props.high[2], props.low[2], props.close[2]],
        },
        {
          x: props.dates[1],
          y: [props.open[1], props.high[1], props.low[1], props.close[1]],
        },
        {
          x: props.dates[0],
          y: [props.open[0], props.high[0], props.low[0], props.close[0]],
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box border={1}>
        <Chart
          type="candlestick"
          height="300"
          width="100%"
          series={series}
          options={options}
        />
      </Box>
    </Container>
  );
};

export default Candlechart;
