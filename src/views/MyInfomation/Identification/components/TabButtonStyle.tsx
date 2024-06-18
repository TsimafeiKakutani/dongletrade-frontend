/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      width: 'auto',
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '4px',
      color: 'rgb(30, 35, 41)',
      cursor: 'pointer',
      marginRight: '16px',
      '&:hover': {
        color: 'rgb(240, 185, 11)',
      },
      '&:active': {
        backgroundColor: '#fef6d8',
        color: '#1e2329',
        borderRadius: '25px',
      },
    },
    activeTab: {
      backgroundColor: 'rgb(252, 213, 53)',
      color: 'rgb(30, 35, 41)',
      fontWeight: 400,
      borderRadius: '25px',
      '&:hover': {
        opacity: '0.9',
        color: 'rgb(30, 35, 41)',
      },
      '&:active': {
        backgroundColor: '#f0b90b',
      },
    },
  }),
)
