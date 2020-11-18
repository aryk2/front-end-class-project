import React, { FunctionComponent, useEffect, useState } from "react";
import { Grid, Box, Link, Container, makeStyles } from "@material-ui/core";

import fetch from "node-fetch";
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;
// @ts-ignore
const useStyles = makeStyles({
  root: {
    "& .MuiTypography-colorPrimary": { color: "#4dd0e1" },
  },
});
export interface NewsPageProps {}

export const NewsPage: FunctionComponent<NewsPageProps> = (props) => {
  const classes = useStyles();
  const [isLoaded, setLoaded] = useState(false);
  const [news, setNews] = useState<null | any[]>(null);
  const getData = async () => {
    await fetch(newsCall)
      .then((response: any) => response.json())
      .then((jsonResponse: any) => {
        setNews(jsonResponse);
        setLoaded(true);
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

  function handleRedirect(url: string) {
    if (url === "") return;
    else {
      window.open(url);
      return;
    }
  }

  if (isLoaded === true) {
    return (
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "#212121" }}
        >
          <Grid item xs={12} justify="center">
            <Box
              textAlign="center"
              borderBottom={1}
              style={{ color: "4dd0e1" }}
              color="#e53935"
            >
              <h1>Breaking News</h1>
            </Box>
          </Grid>
          <Grid item xs={12} justify="center">
            <img src={news![0].image} width="300" height="300" />
          </Grid>
          <Grid item xs={12}>
            <Link
              href="#"
              color="primary"
              onClick={() => handleRedirect(news![0].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![0].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![0].summary}</p>
              </Box>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
          style={{ backgroundColor: "#212121" }}
        >
          <Grid item xs={12}>
            <Box textAlign="center" color="#e53935">
              <h1>Our Top Stories</h1>
            </Box>
          </Grid>
          <Grid item xs={6} classes={classes}>
            <Link
              href="#"
              classes={classes}
              style={{ color: "#4dd0e1" }}
              onClick={() => handleRedirect(news![1].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![1].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![1].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              classes={classes}
              onClick={() => handleRedirect(news![2].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![2].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![2].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              classes={classes}
              onClick={() => handleRedirect(news![3].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![3].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![3].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              classes={classes}
              onClick={() => handleRedirect(news![4].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![4].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![4].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" classes={classes}>
              <Box
                textAlign="center"
                style={{ color: "#4dd0e1" }}
                onClick={() => handleRedirect(news![5].url)}
              >
                <h3>{news![5].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![5].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              color="primary"
              onClick={() => handleRedirect(news![6].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![6].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![6].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              color="primary"
              onClick={() => handleRedirect(news![7].url)}
            >
              <Box textAlign="center" style={{ color: "#4dd0e1" }}>
                <h3>{news![7].headline}</h3>
              </Box>
              <Box
                textAlign="left"
                borderBottom={1}
                style={{ color: "#4dd0e1" }}
              >
                <p>{news![7].summary}</p>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="lg">
        <Box textAlign="center" color="#e53935">
          <h1>Fetching you the latest news</h1>
        </Box>
      </Container>
    );
  }
};

export default NewsPage;
