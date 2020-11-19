import React, { FunctionComponent } from 'react'
import StockPage from '../../components/stock-page/StockPage'
import Layout from '../../components/layout/Layout'

// @ts-ignore
export interface StockProps {}

export const Stock: FunctionComponent<StockProps> = (props) => {
  return (
    <Layout>
      <StockPage />
    </Layout>
  )
}

export default Stock
