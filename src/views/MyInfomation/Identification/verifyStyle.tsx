import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const verifyStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
    cardsContainer: {
      width: '1000px',
      margin: '32px auto 32px auto',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 16px',
      [theme.breakpoints.down(1180)]: {
        width: '800px',
      },
      [theme.breakpoints.down(980)]: {
        display: 'none',
      },
    },
  }),
)
