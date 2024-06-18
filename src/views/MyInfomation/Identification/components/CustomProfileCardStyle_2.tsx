import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export interface CustomAlertStyleProps {
  lettercolor: string
  bgcolor: string
}

export const CustomProfileCardStyle_2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      width: '300px',
      padding: '24px 24px 24px 24px',
      fontFamily: 'Roboto',
      [theme.breakpoints.down(1180)]: {
        width: '230px',
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
    body1: {
      marginTop: '24px',
      minHeight: '170px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '16px',
    },
    row_icon: {
      color: '',
      fontSize: '16px',
    },
    row_context: {
      marginLeft: '8px',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(112, 122, 138)',
    },
    empty_row: {
      minWidth: '20px',
    },
    row_btn: {
      margin: '16px 0px 24px',
      width: '100%',
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    row_btn2: {
      margin: '16px 0px 24px',
      appearance: 'none',
      userSelect: 'none',
      cursor: 'not-allowed',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inlinflex',
      justifyContent: 'center',
      fontFamily: 'Roboto',
      textAlign: 'center',
      textDecoration: 'none',
      outline: 'none',
      padding: '12px 24px',
      minWidth: '80px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(183, 189, 198)',
      minHeight: '24px',
      border: 'none',
      backgroundColor: 'rgb(234, 236, 239)',
      borderRadius: '4px',
      width: '100%',
    },
    body2: {
      margin: '0',
    },
    body2_row: {
      padding: '8px 8px 8px 8px',
      marginTop: '8px',
      '&:hover': {
        backgroundColor: 'rgb(250 251 252)',
        borderRadius: '6px',

        padding: '8px, 8px, 8px, 8px',
      },
    },
    body2_row_title: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(112, 122, 138)',
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
    },
    body2_row_context: {
      margin: '8px 8px 0px 0px',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(30, 35, 41)',
      fontFamily: 'Roboto',
    },
    svg_icon: {
      width: '16px',
      height: '16px',
    },
  }),
)
