import React, { FunctionComponent } from 'react'
import ForexPage from '../../components/forex-page/ForexPage'
import Layout from '../../components/layout/Layout'
import {PageProps} from '../../models/pageProps'

// @ts-ignore
export interface ForexProps extends PageProps {
}

export const Forex: FunctionComponent<ForexProps> = (props) => {


  return (
    <Layout searchProps={props.searchProps}>
      <ForexPage 
        fromCurrency={props.searchProps.searchForex.fromCurrency}
        toCurrency={props.searchProps.searchForex.toCurrency}
      />
    </Layout>
  )
}

export default Forex
