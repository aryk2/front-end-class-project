import React, { FunctionComponent } from 'react'
import Layout from '../../components/layout'
import Homepage from '../../components/home-page/HomePage'
import {PageProps} from '../../models/pageProps'

export interface DashboardProps extends PageProps {}


export const Dashboard: FunctionComponent<DashboardProps> = (props) => {
  return (
    <Layout searchProps={props.searchProps}>
      <Homepage />
    </Layout>

  )
}

export default Dashboard
