import React, { FunctionComponent } from 'react'
import ForexPage from '../../components/forex-page/ForexPage'
import Layout from '../../components/layout/Layout'
import {PageProps} from '../../models/pageProps'
import {favoriteItem} from '../../models/favoriteItem'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// @ts-ignore
export interface ForexProps extends PageProps {
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

export const Forex: FunctionComponent<ForexProps> = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleOpenSnackBar = () => {
    console.log('open')
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Layout searchProps={props.searchProps}>
      <ForexPage 
        fromCurrency={props.searchProps.searchForex.fromCurrency}
        toCurrency={props.searchProps.searchForex.toCurrency}
        favoriteFunctions={props.favoriteFunctions}
        handleOpenSnackBar={handleOpenSnackBar}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Error Loading Forex Information"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Layout>
  )
}

export default Forex
