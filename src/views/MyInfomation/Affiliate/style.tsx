import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '32px',
      flexGrow: 1,
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '8px',
    },
    root: {
      flexGrow: 1,
    },
  }),
)
