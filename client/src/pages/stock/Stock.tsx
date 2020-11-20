import React, { FunctionComponent } from 'react'
import StockPage from '../../components/stock-page/StockPage'
import Layout from '../../components/layout/Layout'
import {PageProps} from '../../models/pageProps'


// @ts-ignore
export interface StockProps extends PageProps {
  stock: string
}

export const Stock: FunctionComponent<StockProps> = (props) => {
  return (
    <Layout searchProps={props.searchProps}>
      <StockPage stock={props.stock}/>
    </Layout>
  )
}

export default Stock
