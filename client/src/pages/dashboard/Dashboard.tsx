import React, { FunctionComponent } from 'react'
import Layout from '../../components/layout'
import Homepage from '../../components/home-page/HomePage'
import {PageProps} from '../../models/pageProps'
import {favoriteItem} from '../../models/favoriteItem'
export interface DashboardProps extends PageProps {
  test?: boolean
  homePageProps: {
    favoriteItems: favoriteItem[]
    handleAddFavorite: (favoriteItem: favoriteItem) => void
    handleRemoveFavorite: (favoriteItem: favoriteItem) => void
  }
}


export const Dashboard: FunctionComponent<DashboardProps> = (props) => {
  return (
    <Layout searchProps={props.searchProps}>
      <Homepage test={props.test} homePageProps={props.homePageProps} searchProps={props.searchProps}/>
    </Layout>

  )
}

export default Dashboard
