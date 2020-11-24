import React, { FunctionComponent } from 'react'
import {PageProps} from '../../models/pageProps'
import Layout from '../../components/layout'
import Newsfeed from "../../components/newsfeed/Newsfeed";

import {
  Grid,
} from "@material-ui/core";

// @ts-ignore
export interface NewsProps extends PageProps  {}

export const News: FunctionComponent<NewsProps> = (props) => {
  return (
    <Layout searchProps={props.searchProps}>
      <Grid
      container
      direction="row"
      justify="flex-start"
      alignContent="center"
      spacing={1}
      style={{paddingRight: 40}}
    >
      <Grid item xs={12} sm={6}>
        <Newsfeed amnt={30}/>
      </Grid>
    </Grid>
    </Layout>

  )
}

export default News
