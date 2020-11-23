import React, { FunctionComponent, useState } from "react";
import { TextField, Container, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    
  },
});

export const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const { searchStock, searchForex, handleSearchStock, handleSearchForex } = props


  const classes = useStyles();
  const [stock, setStock] = useState<string>(searchStock || '');
  const [fromCurrency, setFromCurrency] = useState(searchForex?.fromCurrency || '');
  const [toCurrency, setToCurrency] = useState(searchForex?.toCurrency || '');

  const onKeyDownStock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearchStock(stock)
    }
  }

  const onKeyDownForex = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      fromCurrency && toCurrency &&
      handleSearchForex({fromCurrency, toCurrency})
    }
  }

  return (
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-around">
          <Box alignContent="center" justifyContent="flex-start">
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
              onKeyDown={(event) => onKeyDownStock(event)}
            />
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
              onKeyDown={(event) => onKeyDownForex(event)}
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
              onKeyDown={(event) => onKeyDownForex(event)}
            />
          </Box>
        </Box>
      </Container>
  );
};

export default SearchBar;
