import React, { FunctionComponent } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import WebIcon from "@material-ui/icons/Web";

import useNewsStories from "../../hooks/useNewsStories";
export interface NewsFeedProps {
  articles: NewsFeedItemProps[];
}

interface NewsFeedItemProps {
  title: string;
  date: Date;
  url: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(0, 0, 5),
  },
  paper: {
    padding: theme.spacing(2, 1),
  },
  header: {
    padding: theme.spacing(0, 1),
  },
  icons: {
    padding: theme.spacing(0),
  },
  bottomSection: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  newsItems: {
    margin: theme.spacing(0, 0, 0, 0),
  },
  newsItem: {
    margin: theme.spacing(1, 0, 1, 4.75),
  },
  hover: {
    "&:hover": {
      "background-color": "#ebebeb",
      cursor: "pointer",
    },
  },
}));

const apiKey = process.env.REACT_APP_FINNHUB_KEY;
const newsCall =
  "https://finnhub.io/api/v1/news?category=general&token=" + apiKey;


export interface NewsfeedProps {}

const staticText = {
  hour: " hour ago",
  hours: " hours ago",
  day: " day ago",
  days: " days ago",
  title: "News",
  readAll: "Go to news",
};


export const Newsfeed: FunctionComponent<NewsfeedProps> = (props) => {
  const classes = useStyles();
  const {isLoaded, stories, amntLoaded} = useNewsStories()

  const handleRedirect = (url: string) => {
    if (url === "") return;
    else {
      window.open(url);
      return;
    }
  };

  const dateFormat = (date: Date) => {
    const hours = Math.abs(new Date().getTime() - date.getTime()) / 3.6e6;

    if (hours < 1) return String(Math.ceil(hours)) + staticText.hour;
    if (hours < 24) return String(Math.ceil(hours)) + staticText.hours;
    if (hours < 48) return String(Math.ceil(hours % 24)) + staticText.day;
    return String(Math.ceil(hours % 24)) + staticText.days;
  };

    return (
      <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          id={"header"}
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Grid container direction={"row"} alignItems={"center"}>
              <WebIcon fontSize={"large"} />
              <Typography variant={"h6"} className={classes.header}>
                {staticText.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton aria-label="options" className={classes.icons}>
              <MoreVertIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction={"column"} className={classes.newsItems}>

          {isLoaded ? 
            stories.slice(0, 3)?.map((story, index) => (
            <Grid
              item
              className={classes.hover}
              key={index}
              onClick={() => handleRedirect(story.link)}
            >
              <Grid className={classes.newsItem}>
                <Typography>{story.headline}</Typography>
                <Typography>{dateFormat(story.date)}</Typography>
              </Grid>
            </Grid>
          ))
        : 
        <Typography>loading</Typography>

        }
          <Divider variant="middle" className={classes.bottomSection} />
          <Grid item className={classes.hover}>
            <Grid
              container
              id={"header"}
              direction={"row"}
              alignItems={"center"}
              className={classes.bottomSection}
              onClick={() => handleRedirect("all news")}
            >
              <ArrowForwardIcon fontSize="large" />
              <Typography style={{ paddingLeft: 10 }}>
                {staticText.readAll}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    );
  }

export default Newsfeed;
