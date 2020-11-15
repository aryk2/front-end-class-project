import React, { FunctionComponent, useState } from "react";
import { TextField, Container, AppBar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import StockPage from "../stock-page";
import ForexPage from "../forex-page";
// @ts-ignore
export interface SearchBarProps {}

const useStyles = makeStyles({
  root: {
    backgroundColor: "#212121",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#4dd0e1" },
    "& .MutInputBase-input": { color: "#4dd0e1" },
    "& .MuiInputBase-root": { color: "#4dd0e1" },
    "& label.Mui-focused": { color: "#4dd0e1" },
    "& .MuiInput-underline:after": { borderBottomColor: "#4dd0e1" },
    "& .MuiOutlinedInput-root": {
      "&fieldset": {
        borderColor: "#4dd0e1",
        color: "#4dd0e1",
      },
      "&:hover fieldset": {
        borderColor: "#4dd0e1",
        color: "#4dd0e1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4dd0e1",
        color: "#4dd0e1",
      },
    },
  },
});

export const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const [stockRedirect, setStockRedirect] = useState(false);
  const [forexRedirect, setForexRedirect] = useState(false);

  const classes = useStyles();

  function handleStockSearch() {
    let elem = (document.getElementById("stock") as HTMLInputElement).value;
    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }

    window.localStorage.setItem("stock", query);
  }

  function handleToCurrency() {
    let elem = (document.getElementById("forexTo") as HTMLInputElement).value;
    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }
    window.localStorage.setItem("toCurrency", query);
  }

  function handleFromCurrency() {
    let elem = (document.getElementById("forexFrom") as HTMLInputElement).value;

    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }

    window.localStorage.setItem("fromCurrency", query);
  }

  if (stockRedirect === false && forexRedirect === false) {
    return (
      <AppBar position="fixed" className={classes.root}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between">
            <Box alignContent="center" justifyContent="flex-start">
              <TextField
                size="small"
                margin="dense"
                placeholder="Search for a stock"
                variant="outlined"
                classes={classes}
                id="stock"
                onKeyUp={() => handleStockSearch()}
              />
              <Button
                variant="contained"
                size="medium"
                color="primary"
                style={{
                  marginLeft: "3px",
                  marginTop: "9px",
                }}
                onClick={() => setStockRedirect(true)}
              >
                Search
              </Button>
            </Box>
            <Box alignContent="flex-end">
              <TextField
                size="small"
                margin="dense"
                placeholder="From Currency"
                variant="outlined"
                classes={classes}
                id="forexFrom"
                onKeyUp={() => handleFromCurrency()}
              />{" "}
              <TextField
                size="small"
                margin="dense"
                placeholder="To Currency"
                variant="outlined"
                classes={classes}
                id="forexTo"
                onKeyUp={() => handleToCurrency()}
              />
              <Button
                variant="contained"
                size="medium"
                color="primary"
                style={{ marginLeft: "3px", marginTop: "9px" }}
                onClick={() => setForexRedirect(true)}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    );
  } else if (stockRedirect === true) {
    return (
      <Router>
        <Route path="/StockPage" component={StockPage} />
        <Redirect to="/StockPage" />
      </Router>
    );
  } else {
    return (
      <Router>
        <Route path="/ForexPage" component={ForexPage} />
        <Redirect to="/ForexPage" />
      </Router>
    );
  }
};

export default SearchBar;
