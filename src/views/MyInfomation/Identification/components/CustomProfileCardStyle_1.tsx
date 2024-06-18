import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const CustomProfileCardStyle_1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgb(250, 250, 250)',
      width: '300px',
      padding: '24px 24px 24px 32px',
      fontFamily: 'Roboto',
      minHeight: '600px',
      borderRadius: '9px',
      [theme.breakpoints.down(1180)]: {
        width: '237px',
      },
    },
    title: {
      fontWeight: 500,
      fontSize: '28px',
      lineHeight: '36px',
      [theme.breakpoints.down(1180)]: {
        fontSize: '24px',
      },
    },
    body: {
      marginTop: '90px',
      alignItems: 'center',
    },
    symbol: {
      width: '96px',
      height: '96px',
      margin: 'auto',
      alignItems: 'center',
      display: 'block',
    },
    first_sentence: {
      marginTop: '16px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(30, 35, 41)',
      textAlign: 'center',
    },
    second_sentence: {
      marginTop: '8px',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(112, 122, 138)',
      textAlign: 'center',
    },
  }),
)
