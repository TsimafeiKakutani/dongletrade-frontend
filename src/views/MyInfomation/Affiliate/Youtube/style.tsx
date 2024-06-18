//material-ui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#ffffff',
      flex: '1 1 0%',
      padding: '10px 20px',
      width: '100%',
      height: '100%',
      boxShadow: 'rgb(20 21 26 / 4%) 0px 1px 2px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(20 21 26 / 10%) 0px 0px 1px',
      boxSizing: 'border-box',
      borderRadius: '4px',
    },
    video_responsive: {
      overflow: 'hidden',
      paddingBottom: '50%',
      position: 'relative',
      height: 0,
    },
    video_iframe: {
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    social_container: {
      justifyContent: 'center',
      paddingTop: '20px',
      display: 'flex',
    },
    social_icon: {
      padding: '10px 10px',
    },
    medium_container: {
      justifyContent: 'center',
      paddingTop: '15px',
      display: 'flex',
    },
    medium_link: {
      fontSize: '15px',
    },
  }),
)
