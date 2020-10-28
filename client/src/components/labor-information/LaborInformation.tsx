import React, { FunctionComponent, useState, useEffect } from "react";
import UnemploymentChart from "../unemployment-chart";
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
  const [sept2020, setSept2020] = useState("");
  const [aug2020, setAug2020] = useState("");
  const [july2020, setJuly2020] = useState("");
  const [june2020, setJune2020] = useState("");
  const [may2020, setMay2020] = useState("");
  const [april2020, setApril2020] = useState("");
  const [march2020, setMarch2020] = useState("");
  const [feb2020, setFeb2020] = useState("");
  const [jan2020, setJan2020] = useState("");

  const [sept2019, setSept2019] = useState("");
  const [aug2019, setAug2019] = useState("");
  const [july2019, setJuly2019] = useState("");
  const [june2019, setJune2019] = useState("");
  const [may2019, setMay2019] = useState("");
  const [april2019, setApril2019] = useState("");
  const [march2019, setMarch2019] = useState("");
  const [feb2019, setFeb2019] = useState("");
  const [jan2019, setJan2019] = useState("");

  const [sept2018, setSept2018] = useState("");
  const [aug2018, setAug2018] = useState("");
  const [july2018, setJuly2018] = useState("");
  const [june2018, setJune2018] = useState("");
  const [may2018, setMay2018] = useState("");
  const [april2018, setApril2018] = useState("");
  const [march2018, setMarch2018] = useState("");
  const [feb2018, setFeb2018] = useState("");
  const [jan2018, setJan2018] = useState("");

  const getData = async () => {
    await fetch(laborUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLoading(true);

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

        setSept2018(jsonResponse.Results.series[0].data[24].value);
        setAug2018(jsonResponse.Results.series[0].data[25].value);
        setJuly2018(jsonResponse.Results.series[0].data[26].value);
        setJune2018(jsonResponse.Results.series[0].data[27].value);
        setMay2018(jsonResponse.Results.series[0].data[28].value);
        setApril2018(jsonResponse.Results.series[0].data[29].value);
        setMarch2018(jsonResponse.Results.series[0].data[30].value);
        setFeb2018(jsonResponse.Results.series[0].data[31].value);
        setJan2018(jsonResponse.Results.series[0].data[32].value);
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
    return (
      <UnemploymentChart
        jan2018={jan2018}
        feb2018={feb2018}
        march2018={march2018}
        april2018={april2018}
        may2018={may2018}
        june2018={june2018}
        july2018={july2018}
        aug2018={aug2018}
        sept2018={sept2018}
        jan2019={jan2019}
        feb2019={feb2019}
        march2019={march2019}
        april2019={april2019}
        may2019={may2019}
        june2019={june2019}
        july2019={july2019}
        aug2019={aug2019}
        sept2019={sept2019}
        jan2020={jan2020}
        feb2020={feb2020}
        march2020={march2020}
        april2020={april2020}
        may2020={may2020}
        june2020={june2020}
        july2020={july2020}
        aug2020={aug2020}
        sept2020={sept2020}
      />
    );
  } else {
    return <h1></h1>;
  }
};

export default LaborInformation;
