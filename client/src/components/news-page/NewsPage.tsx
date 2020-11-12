import React, { FunctionComponent, useEffect, useState } from "react";
import { Grid, Box, Link, Container } from "@material-ui/core";

import fetch from "node-fetch";
const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;
// @ts-ignore
export interface NewsPageProps {}

export const NewsPage: FunctionComponent<NewsPageProps> = (props) => {
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

  if (isLoaded === true) {
    console.log(news);
    return (
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} justify="center">
            <Box textAlign="center" borderBottom={1}>
              <h1>Breaking News</h1>
            </Box>
          </Grid>
          <Grid item xs={12} justify="center">
            <img src={news![0].image} width="300" height="300" />
          </Grid>
          <Grid item xs={12}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![0].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![0].summary}</p>
              </Box>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box textAlign="center">
              <h1>Our Top Stories</h1>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![1].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![1].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![2].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![2].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![3].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![3].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![4].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![4].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![5].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![5].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![6].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![6].summary}</p>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="#" color="primary">
              <Box textAlign="center">
                <h3>{news![7].headline}</h3>
              </Box>
              <Box textAlign="left" borderBottom={1}>
                <p>{news![7].summary}</p>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <h1>Not Loaded</h1>;
  }
};

export default NewsPage;
