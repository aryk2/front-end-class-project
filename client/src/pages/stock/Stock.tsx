import React, { FunctionComponent } from 'react'
import StockPage from '../../components/stock-page/StockPage'
import Layout from '../../components/layout/Layout'
import {PageProps} from '../../models/pageProps'
import {favoriteItem} from '../../models/favoriteItem'

// @ts-ignore
export interface StockProps extends PageProps {
  stock: string
  favoriteFunctions: {
    favorites: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}

export const Stock: FunctionComponent<StockProps> = (props) => {
  return (
    <Layout searchProps={props.searchProps}>
      <StockPage stock={props.stock} favoriteFunctions={props.favoriteFunctions}/>
    </Layout>
  )
}

export default Stock
