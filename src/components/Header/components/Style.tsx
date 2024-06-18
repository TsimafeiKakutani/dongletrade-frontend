/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      '& .MuiPaper-root': {
        background: theme.palette.primary.dark,
        color: theme.palette.secondary.dark,
        borderRadius: '6px',
        width: '600px',
        '@media (max-width:700px)': {
          height: '100%',
          width: '100%',
          maxWidth: '100%',
          maxHeight: 'none',
          margin: 0,
        },
      },
    },
    fontColor6: {
      color: theme.palette.text.hint,
    },
    linkStyle: {
      lineHeight: '24px',
      textDecoration: 'underline',
    },
    fontColor7: {
      color: theme.palette.secondary.main,
    },
    learnMore: {
      color: theme.palette.secondary.light,
      lineHeight: '24px',
    },
    languageSelectButton: {
      margin: '16px 16px 0 0',
      width: '26%',
      padding: '10px 12px',
      borderRadius: '4px',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: '#282c30',
        cursor: 'pointer',
      },
    },
    languageSelectButton1: {
      margin: '16px 16px 0 0',
      width: '26%',
      padding: '10px 12px',
      borderRadius: '4px',
      textAlign: 'center',
      color: 'gray',
      // "&:hover": {
      //   backgroundColor: "#282c30",
      //   cursor: "pointer",
      // },
    },
    videoClick: {
      cursor: 'pointer',
    },
    videoIcon: {
      margin: '-4px 20px 0px 0px',
    },
  }),
)
