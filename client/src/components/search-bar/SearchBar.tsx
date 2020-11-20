import React, { FunctionComponent, useState } from "react";
import { TextField, Container, AppBar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {forexSearch} from '../../models/forexSearch' 

// @ts-ignore
export interface SearchBarProps {
  searchStock: string
  searchForex: forexSearch
  handleSearchStock: (searchStock: string) => void
  handleSearchForex: (searchForex: forexSearch) => void
}

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
  const { searchStock, searchForex, handleSearchStock, handleSearchForex } = props


  const classes = useStyles();
  const [stock, setStock] = useState<string>(searchStock);
  const [fromCurrency, setFromCurrency] = useState(searchForex.fromCurrency);
  const [toCurrency, setToCurrency] = useState(searchForex.toCurrency);


  // function handleStockSearch() {
  //   let elem = (document.getElementById("stock") as HTMLInputElement).value;
  //   let query = "";
  //   for (let i = 0; i < elem.length; ++i) {
  //     query += elem[i].toUpperCase();
  //   }

  //   window.localStorage.setItem("stock", query);
  //   setStock(query);
  // }

  // function handleToCurrency() {
  //   let elem = (document.getElementById("forexTo") as HTMLInputElement).value;
  //   let query = "";
  //   for (let i = 0; i < elem.length; ++i) {
  //     query += elem[i].toUpperCase();
  //   }
  //   window.localStorage.setItem("toCurrency", query);
  //   setToCurrency(query);
  // }

  // function handleFromCurrency() {
  //   let elem = (document.getElementById("forexFrom") as HTMLInputElement).value;

  //   let query = "";
  //   for (let i = 0; i < elem.length; ++i) {
  //     query += elem[i].toUpperCase();
  //   }

  //   window.localStorage.setItem("fromCurrency", query);
  //   setFromCurrency(query);
  // }

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
                value={stock}
                onChange={(event) => setStock(event.target.value)}
              />
              <Link to={`/stock/${stock}`}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  style={{
                    marginLeft: "3px",
                    marginTop: "9px",
                  }}
                  onClick={() => handleSearchStock(stock)}
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
              onChange={(event) => setFromCurrency(event.target.value)}
            />{" "}
            <TextField
              size="small"
              margin="dense"
              placeholder="To Currency"
              variant="outlined"
              classes={classes}
              id="forexTo"
              aria-label="Search for a from currency"
              onChange={(event) => setToCurrency(event.target.value)}
            />
            <Link to={`/forex/${fromCurrency}/${toCurrency}`}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                style={{ marginLeft: "3px", marginTop: "9px" }}
                onClick={() => handleSearchForex({fromCurrency, toCurrency})}
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
