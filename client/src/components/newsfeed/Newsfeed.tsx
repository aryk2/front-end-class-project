import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Link,
  makeStyles,
  Container,
} from "@material-ui/core";

import { Link as RLink } from "react-router-dom";
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;
// @ts-ignore
const useStyles = makeStyles({
  root: {
    backgroundColor: "#212121",
    color: "#00bcd4",
  },
});
export interface NewsfeedProps {}

export const Newsfeed: FunctionComponent<NewsfeedProps> = (props) => {
  const classes = useStyles();

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
      <Container maxWidth="md">
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item xs={4}>
            <Box textAlign="center">
              <h1>Our Top Stories</h1>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              borderTop={1}
              borderBottom={1}
              textAlign="left"
              fontSize={12}
              pl={1}
            >
              {newsSource1}
              <br />
              <Link
                href="#"
                onClick={() => handleRedirect(link1)}
                color="inherit"
              >
                {headline1}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              borderBottom={1}
              textAlign="left"
              fontSize={12}
              pl={1}
              justifyContent="left"
            >
              {newsSource2}
              <br />
              <Link
                href="#"
                onClick={() => handleRedirect(link2)}
                color="inherit"
              >
                {headline2}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              borderBottom={1}
              textAlign="left"
              fontSize={12}
              pl={1}
              maxWidth="100"
            >
              {newsSource3}
              <br />
              <Link
                href="#"
                color="inherit"
                onClick={() => handleRedirect(link3)}
              >
                {headline3}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="center" fontSize={16}>
              <RLink to="/NewsPage">
                <Link href="#" color="inherit">
                  Click here to see more top stories
                </Link>
              </RLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <h1></h1>;
  }
};

export default Newsfeed;
