import React, { useState, useEffect } from 'react'
import { Box, Typography, Card } from '@material-ui/core'
import jwt_decode from 'jwt-decode'

import { GetAffiliateBalance } from 'hooks/dashboard'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getHeaderPrices } from 'store/headerinfo'
import { headerPrices } from 'store/headerinfo/selectors'

import { useStyles } from './Style'

interface MyToken {
  userId: string
}

export default function BalanceDetail() {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const headerInfos = useAppSelector(headerPrices)

  const [balance, setBalance] = useState(0)

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)

    GetAffiliateBalance(formData).then((res: any) => {
      setBalance(res?.data?.Balance)
    })
  }, [decoded?.userId])

  useEffect(() => {
    const formData = new FormData()
    formData.append('pair', 'ZNX/USDT')
    dispatch(getHeaderPrices(formData))
  }, [dispatch])

  return (
    <Card className={classes.CustomCard}>
      <div className={classes.CustomCardHeader}>
        <Typography className={classes.paragraphTitle}>Affiliate Balance</Typography>
      </div>

      <Box className={classes.cardBody}>
        <Typography className={classes.balanceAmount}>{balance} ZNX</Typography>
        <Typography>
          <span className={classes.balanceType}> = {(balance * headerInfos.Price).toFixed(2)} USD</span>
        </Typography>
      </Box>
    </Card>
  )
}
