import React, { FunctionComponent, useState, useEffect } from "react";
const laborKey = process.env.REACT_APP_BLS_KEY;
const laborUrl =
  "https://api.bls.gov/publicAPI/v2/timeseries/data/LNS14000000?registrationkey=" +
  laborKey;
// @ts-ignore
export interface LaborInformationProps {}

export const LaborInformation: FunctionComponent<LaborInformationProps> = (
  props
) => {
  const [isLoaded, setLoading] = useState(false);
  const [sept2020, setSept2020] = useState(null);
  const [aug2020, setAug2020] = useState(null);
  const [july2020, setJuly2020] = useState(null);
  const [june2020, setJune2020] = useState(null);
  const [may2020, setMay2020] = useState(null);
  const [april2020, setApril2020] = useState(null);
  const [march2020, setMarch2020] = useState(null);
  const [feb2020, setFeb2020] = useState(null);
  const [jan2020, setJan2020] = useState(null);

  const [sept2019, setSept2019] = useState(null);
  const [aug2019, setAug2019] = useState(null);
  const [july2019, setJuly2019] = useState(null);
  const [june2019, setJune2019] = useState(null);
  const [may2019, setMay2019] = useState(null);
  const [april2019, setApril2019] = useState(null);
  const [march2019, setMarch2019] = useState(null);
  const [feb2019, setFeb2019] = useState(null);
  const [jan2019, setJan2019] = useState(null);

  const [sept2018, setSept2018] = useState(null);
  const [aug2018, setAug2018] = useState(null);
  const [july2018, setJuly2018] = useState(null);
  const [june2018, setJune2018] = useState(null);
  const [may2018, setMay2018] = useState(null);
  const [april2018, setApril2018] = useState(null);
  const [march2018, setMarch2018] = useState(null);
  const [feb2018, setFeb2018] = useState(null);
  const [jan2018, setJan2018] = useState(null);

  const getData = async () => {
    await fetch(laborUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(true);
        console.log(jsonResponse);
        setSept2020(jsonResponse.Results.series[0].data[0].value);
        setAug2020(jsonResponse.Results.series[0].data[1].value);
        setJuly2020(jsonResponse.Results.series[0].data[2].value);
        setJune2020(jsonResponse.Results.series[0].data[3].value);
        setMay2020(jsonResponse.Results.series[0].data[4].value);
        setApril2020(jsonResponse.Results.series[0].data[5].value);
        setMarch2020(jsonResponse.Results.series[0].data[6].value);
        setFeb2020(jsonResponse.Results.series[0].data[7].value);
        setJan2020(jsonResponse.Results.series[0].data[8].value);

        setSept2019(jsonResponse.Results.series[0].data[12].value);
        setAug2019(jsonResponse.Results.series[0].data[13].value);
        setJuly2019(jsonResponse.Results.series[0].data[14].value);
        setJune2019(jsonResponse.Results.series[0].data[15].value);
        setMay2019(jsonResponse.Results.series[0].data[16].value);
        setApril2019(jsonResponse.Results.series[0].data[17].value);
        setMarch2019(jsonResponse.Results.series[0].data[18].value);
        setFeb2019(jsonResponse.Results.series[0].data[19].value);
        setJan2019(jsonResponse.Results.series[0].data[20].value);

        setSept2018(jsonResponse.Results.series[0].data[12].value);
        setAug2018(jsonResponse.Results.series[0].data[13].value);
        setJuly2018(jsonResponse.Results.series[0].data[14].value);
        setJune2018(jsonResponse.Results.series[0].data[15].value);
        setMay2018(jsonResponse.Results.series[0].data[16].value);
        setApril2018(jsonResponse.Results.series[0].data[17].value);
        setMarch2018(jsonResponse.Results.series[0].data[18].value);
        setFeb2018(jsonResponse.Results.series[0].data[19].value);
        setJan2018(jsonResponse.Results.series[0].data[20].value);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isLoaded === false) {
      getData();
      return;
    } else {
      console.log(sept2020);
      return;
    }
  }, []);

  if (isLoaded === true) {
    return <h1>{sept2020}</h1>;
  } else {
    return <h1></h1>;
  }
};

export default LaborInformation;
