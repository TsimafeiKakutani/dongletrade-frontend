import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { useStyles } from './style'
import { Typography } from '@material-ui/core'

function Youtube() {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <div className={classes.video_responsive}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/oxnLTjyuqK0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
          className={classes.video_iframe}
        />
      </div>
      <div className={classes.social_container}>
        <Link to={{ pathname: 'https://t.me/zilionixxcommunity' }} className={classes.social_icon} target="_blank">
          <TelegramIcon />
        </Link>
        <Link to={{ pathname: 'https://twitter.com/zilionixx' }} className={classes.social_icon} target="_blank">
          <TwitterIcon />
        </Link>
        <Link to={{ pathname: 'https://www.facebook.com/Zilionixx' }} className={classes.social_icon} target="_blank">
          <FacebookIcon />
        </Link>
        <Link to={{ pathname: 'https://www.instagram.com/zilionixx' }} className={classes.social_icon} target="_blank">
          <InstagramIcon />
        </Link>
        <Link
          to={{ pathname: 'https://www.linkedin.com/company/zilionixx' }}
          className={classes.social_icon}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <div className={classes.medium_container}>
        <Link
          to={{
            pathname: 'https://medium.com/@zilionixx_foundation/connecting-metamask-to-zilionixx-network-7ec14b6a36af',
          }}
          target="_blank"
        >
          <Typography className={classes.medium_link}>How To Deposit To Your ZNX Address</Typography>
        </Link>
      </div>
    </Card>
  )
}

export default Youtube
