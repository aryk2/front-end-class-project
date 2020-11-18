import React, { FunctionComponent, useState } from "react";
import { TextField, Container, AppBar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  const classes = useStyles();
  const [stock, setStock] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  function handleStockSearch() {
    let elem = (document.getElementById("stock") as HTMLInputElement).value;
    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }

    window.localStorage.setItem("stock", query);
    setStock(query);
  }

  function handleToCurrency() {
    let elem = (document.getElementById("forexTo") as HTMLInputElement).value;
    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }
    window.localStorage.setItem("toCurrency", query);
    setToCurrency(query);
  }

  function handleFromCurrency() {
    let elem = (document.getElementById("forexFrom") as HTMLInputElement).value;

    let query = "";
    for (let i = 0; i < elem.length; ++i) {
      query += elem[i].toUpperCase();
    }

    window.localStorage.setItem("fromCurrency", query);
    setFromCurrency(query);
  }

  function clearInputs() {
    (document.getElementById("stock") as HTMLInputElement).value = "";
    (document.getElementById("forexTo") as HTMLInputElement).value = "";
    (document.getElementById("forexFrom") as HTMLInputElement).value = "";
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-around">
          <Box>
            <Link to="/">
              <Button
                variant="contained"
                size="medium"
                color="primary"
                style={{
                  marginTop: "9px",
                }}
                onClick={() => clearInputs()}
              >
                Home
              </Button>
            </Link>
          </Box>
          <Box alignContent="center" justifyContent="flex-start">
            <form>
              <TextField
                size="small"
                margin="dense"
                placeholder="Search for a stock"
                variant="outlined"
                classes={classes}
                id="stock"
                aria-label="Search for a stock"
                onKeyUp={() => handleStockSearch()}
              />
              <Link to={`/StockPage/${stock}`}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  style={{
                    marginLeft: "3px",
                    marginTop: "9px",
                  }}
                  onClick={() => clearInputs()}
                >
                  Search
                </Button>
              </Link>
            </form>
          </Box>
          <Box alignContent="flex-end">
            <TextField
              size="small"
              margin="dense"
              placeholder="From Currency"
              variant="outlined"
              classes={classes}
              id="forexFrom"
              aria-label="Search for a to currency"
              onKeyUp={() => handleFromCurrency()}
            />{" "}
            <TextField
              size="small"
              margin="dense"
              placeholder="To Currency"
              variant="outlined"
              classes={classes}
              id="forexTo"
              aria-label="Search for a from currency"
              onKeyUp={() => handleToCurrency()}
            />
            <Link to={`/ForexPage/${fromCurrency}/${toCurrency}`}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                style={{ marginLeft: "3px", marginTop: "9px" }}
                onClick={() => clearInputs()}
              >
                Search
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default SearchBar;
