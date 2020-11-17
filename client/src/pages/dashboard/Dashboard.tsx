import React, { FunctionComponent } from 'react'
import Layout from '../../components/layout'
import Homepage from '../../components/home-page/HomePage'

// @ts-ignore
export interface DashboardProps {}

export const Dashboard: FunctionComponent<DashboardProps> = (props) => {
  return (
    <Layout>
      <Homepage />
    </Layout>

  )
}

export default Dashboard
