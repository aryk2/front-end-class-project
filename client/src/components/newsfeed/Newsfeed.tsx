import React, { FunctionComponent, useState, useEffect } from "react";
import { Grid, Container, Button } from "@material-ui/core";
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;
// @ts-ignore

export interface NewsfeedProps {
  news: any;
}

export const Newsfeed: FunctionComponent<NewsfeedProps> = (props) => {
  const [isLoaded, setLoaded] = useState(false);
  const [newsSource1, setSource1] = useState("");
  const [headline1, setHeadline1] = useState("");
  const [link1, setLink1] = useState("");

  const [newsSource2, setSource2] = useState("");
  const [headline2, setHeadline2] = useState("");
  const [link2, setLink2] = useState("");

  const [newsSource3, setSource3] = useState("");
  const [headline3, setHeadline3] = useState("");
  const [link3, setLink3] = useState("");

  const getData = async () => {
    await fetch(newsCall)
      .then((response) => response.json())
      .then((jsonResponse: any) => {
        //console.log(jsonResponse);
        setLoaded(true);
        setSource1(jsonResponse[0].source);
        setSource2(jsonResponse[1].source);
        setSource3(jsonResponse[2].source);
        setHeadline1(jsonResponse[0].headline);
        setHeadline2(jsonResponse[1].headline);
        setHeadline3(jsonResponse[2].headline);
        setLink1(jsonResponse[0].url);
        setLink2(jsonResponse[1].url);
        setLink3(jsonResponse[2].url);
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
      return;
    }
  }, []);

  const handleRedirect = (url: string) => {
    if (url === "") return;
    else {
      window.open(url);
      return;
    }
  };

  if (isLoaded === true) {
    return (
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Container>{newsSource1}</Container>
          <Container>{headline1}</Container>
          <Container>
            <Button color="primary" onClick={() => handleRedirect(link1)}>
              Click here to find out more.
            </Button>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>{newsSource2}</Container>
          <Container>{headline2}</Container>
          <Container>
            <Button color="primary" onClick={() => handleRedirect(link2)}>
              Click here to find out more.
            </Button>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container>{newsSource3}</Container>
          <Container>{headline3}</Container>
          <Container>
            <Button color="primary" onClick={() => handleRedirect(link3)}>
              Click here to find out more.
            </Button>
          </Container>
        </Grid>
      </Grid>
    );
  } else {
    return <h1></h1>;
  }
};

export default Newsfeed;
