import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const Res_indexStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down(980)]: {
        display: 'contents',
      },
      [theme.breakpoints.up(980)]: {
        display: 'none',
      },
    },
    containerBody: {
      padding: '0px',
    },
    actionBar: {
      padding: '16px 16px 0px 16px',
    },
  }),
)
