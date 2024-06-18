import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'

import { useStyles } from './style'

import MyAffiliates from './MyAffiliates'
import AffiliateBalance from './AffiliateBalance'
import InivteLink from './InviteLink'
import Youtube from './Youtube'

function Affiliate() {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.pageTitle}>Affiliate</Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <AffiliateBalance />
            <InivteLink />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Youtube />
          </Grid>
          <Grid item xs={12}>
            <MyAffiliates />
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}

export default Affiliate
