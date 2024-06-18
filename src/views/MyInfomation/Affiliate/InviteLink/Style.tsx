//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: '10px 16px',
      width: '100%',
      height: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    cardHeader: {
      display: 'flex',
      paddingTop: '16px',
      paddingBottom: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eaecef',
    },
    subHeader: {
      display: 'flex',
      paddingTop: '25px',
      paddingBottom: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eaecef',
    },
    content: {
      textAlign: 'center',
      marginTop: '24px',
    },
    titleName: {
      textDecoration: 'none',
      display: 'flex',
      color: '#000000',
      fontWeight: 600,
      fontSize: '16px',
      '&:hover': {
        color: '#f1bb12',
      },
    },
    paragraphTitle: {
      fontSize: '20px',
      color: '#000000',
      lineHeight: '28px',
      fontWeight: 500,
    },
    inputContainer: {
      border: '1px solid #eaecef',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '4px',
      height: '48px',
      width: '100%',
      '&:hover': {
        borderColor: '#f0b90b',
      },
    },
    textFiledInput: {
      fontSize: '14px',
      color: '#1e2329',
      fontWeight: 'normal',
      border: 'none',
      width: '100%',
      height: '100%',
      padding: '0 12px',
      borderRadius: '4px',
      '&:focus': {
        border: 'none',
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
    getCode: {
      flexShrink: 0,
      margin: '0 16px 0 4px',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#c99400',
      fontWeight: 500,
      cursor: 'pointer',
    },
    paragraphSubTitle: {
      fontSize: '15px',
      color: '#000000',
      lineHeight: '28px',
      fontWeight: 500,
    },
    note1: {
      fontSize: '15px',
      color: '#1e2329',
      fontWeight: 'normal',
      width: '100%',
      height: '100%',
      padding: '0 12px',
      marginBottom: '30px',
    },
    note2: {
      fontSize: '15px',
      color: '#1e2329',
      fontWeight: 'normal',
      width: '100%',
      height: '100%',
      padding: '0 12px',
    },
  }),
)
