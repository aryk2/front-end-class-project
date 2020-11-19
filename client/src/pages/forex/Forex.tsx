import React, { FunctionComponent } from 'react'
import ForexPage from '../../components/forex-page/ForexPage'
import Layout from '../../components/layout/Layout'

// @ts-ignore
export interface ForexProps {}

export const Forex: FunctionComponent<ForexProps> = (props) => {
  return (
    <Layout>
      <ForexPage />
    </Layout>
  )
}

export default Forex
