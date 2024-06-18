import { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import copy from 'copy-text-to-clipboard'
import jwt_decode from 'jwt-decode'

import { GetPromoterLink } from 'hooks/dashboard'

import { useStyles } from './Style'

interface MyToken {
  userId: string
}

function InviteLink() {
  const classes = useStyles()
  const [copyStatus, setCopyStatus] = useState(false)
  const [linkValue, setLinkValue] = useState('https://app.dongletrade.com/register')

  const handleCopy = () => {
    copy(linkValue)
    setCopyStatus(true)
    const timer = setTimeout(() => {
      setCopyStatus(false)
    }, 1000)
    return () => clearTimeout(timer)
  }

  let decoded: any = []
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)

    GetPromoterLink(formData).then((res: any) => {
      setLinkValue(res?.data?.Link)
    })
  }, [decoded?.userId])

  return (
    <Card className={classes.cardRoot}>
      <div className={classes.cardHeader}>
        <Typography className={classes.paragraphTitle}>Invite Link</Typography>
      </div>
      <div>
        <Box className={classes.inputContainer}>
          <input className={classes.textFiledInput} value={linkValue} readOnly></input>
          {copyStatus ? (
            <Typography className={classes.getCode}>copied</Typography>
          ) : (
            <Typography className={classes.getCode} onClick={() => handleCopy()}>
              Copy
            </Typography>
          )}
        </Box>
      </div>
      <div className={classes.subHeader}>
        <Typography className={classes.paragraphSubTitle}>YOU REFER, YOU EARN in ZILIONIXX</Typography>
      </div>
      <div>
        <Typography className={classes.note1}>
          Earn as low as $20 per transaction of your referred member on Zilionixx when they trade or do any transaction.
          Use your unique referral link above to expand your chance of getting commission.
        </Typography>
        <Typography className={classes.note2}>
          Note: There is no limit of number of referrals. There is no limit also on number of bonus and commission.
        </Typography>
      </div>
    </Card>
  )
}

export default InviteLink
