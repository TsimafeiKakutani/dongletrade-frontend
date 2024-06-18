//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    CustomCard: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: ' 0px 16px',
      width: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    CustomCardHeader: {
      paddingTop: '16px',
      alignItems: 'center',
    },
    cardBody: {
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
    },
    balanceAmount: {
      color: '#1e2329',
      fontWeight: 400,
      fontSize: '32px',
      lineHeight: '36px',
    },
    balanceType: {
      marginLeft: '4px',
      fontSize: '16px',
      lineHeight: '24px',
    },
    paragraphTitle: {
      fontSize: '20px',
      color: '#000000',
      lineHeight: '28px',
      fontWeight: 500,
      padding: '10px 0',
    },
  }),
)
