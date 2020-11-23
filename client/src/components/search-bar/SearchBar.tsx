import React, { FunctionComponent, useState } from "react";
import { TextField, Container, Box } from "@material-ui/core";
import {forexSearch} from '../../models/forexSearch' 
import {
  makeStyles,
} from '@material-ui/core/styles';

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
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: 'white',
    },   

    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focused': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: 1,
    },
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
              id="stock"
              aria-label="Search for a stock"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
              onKeyDown={(event) => onKeyDownStock(event)}
              inputProps={{
                className: classes.bootstrapInput
              }}
            />
          </Box>
          <Box alignContent="flex-end">
            <TextField
              size="small"
              margin="dense"
              placeholder="From Currency"
              variant="outlined"
              id="forexFrom"
              aria-label="Search for a to currency"
              onChange={(event) => setFromCurrency(event.target.value)}
              onKeyDown={(event) => onKeyDownForex(event)}
              inputProps={{
                className: classes.bootstrapInput
              }}
            />{" "}
            <TextField
              size="small"
              margin="dense"
              placeholder="To Currency"
              variant="outlined"
              id="forexTo"
              aria-label="Search for a from currency"
              onChange={(event) => setToCurrency(event.target.value)}
              onKeyDown={(event) => onKeyDownForex(event)}
              inputProps={{
                className: classes.bootstrapInput
              }}
            />
          </Box>
        </Box>
      </Container>
  );
};

export default SearchBar;
