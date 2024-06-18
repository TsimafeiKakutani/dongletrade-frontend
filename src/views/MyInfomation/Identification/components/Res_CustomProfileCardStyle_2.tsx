import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export const Res_CustomProfileCardStyle_2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      width: '100%',
      padding: '24px 0px 10px 0px',
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
    },
    title: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '36px',
      fontFamily: 'Roboto',
    },
    body1: {
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '13px',
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
      margin: '16px 0px 12px',
      width: '100%',
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    row_btn2: {
      margin: '16px 0px 12px',
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
      padding: '8px 0px 8px 0px',
    },
    body2_row_title: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(71, 77, 87)',
      fontFamily: 'Roboto',
      marginBottom: '16px',
    },
    body2_row_context: {
      margin: '0px 8px 0px 0px',
      paddingBottom: '16px',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(30, 35, 41)',
      fontFamily: 'Roboto',
      display: 'flex',
      justifyContent: 'space-between',
    },
    body2_row_context1: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(112, 122, 138)',
    },
    body2_row_context2: {
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgb(30, 35, 41)',
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    fixed_block: {
      position: 'fixed',
      bottom: '0px',
      width: 'calc(100vw - 215px)',
      backgroundColor: 'white',
      [theme.breakpoints.down(770)]: {
        width: '100%',
        paddingRight: '25px',
      },
    },
    svg_icon: {
      width: '16px',
      height: '16px',
    },
  }),
)
