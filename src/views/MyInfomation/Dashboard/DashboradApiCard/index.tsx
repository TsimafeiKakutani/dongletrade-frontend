import CustomCard from 'components/Dashboard/CustomCard'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
//----------------style-----------
import { useStyles } from './Style'

export default function DashboardApiCard() {
  const classes = useStyles()

  return (
    <CustomCard url="#" unlink>
      <div className={classes.root}>
        <div className={classes.leftContent}>
          <Link to={'/my/dashboard'} className={classes.link}>
            API
          </Link>
          <div className={classes.badge}>0</div>
        </div>
        <div>
          <Button variant="outlined" className={classes.button} disableRipple>
            Manage
          </Button>
        </div>
      </div>
    </CustomCard>
  )
}
