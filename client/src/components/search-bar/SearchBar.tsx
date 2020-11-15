import React, { FunctionComponent } from "react";
import { TextField, Container, AppBar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  return (
    <AppBar position="fixed" className={classes.root}>
      <Container maxWidth="lg">
        <Box justifyContent="right">
          <TextField
            size="small"
            margin="dense"
            placeholder="Search for a stock"
            variant="outlined"
            classes={classes}
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default SearchBar;
