import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import protect_svg from 'assets/image/verify/protect.svg'
import hover_protect_svg from 'assets/image/verify/hover_protect_svg.svg'
import active_protect_svg from 'assets/image/verify/active_protect_svg.svg'

export const Up_partStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    root_1: {
      flexDirection: 'column',
      width: '100%',
    },
    root_2: {
      width: '1000px',
      margin: '0 auto 0 auto',
      display: 'flex',
      padding: '16px',
      justifyContent: 'space-between',
      [theme.breakpoints.down(1180)]: {
        width: '800px',
        display: 'block',
      },

      [theme.breakpoints.down(980)]: {
        width: '100%',
        backgroundColor: 'rgb(250, 250, 250)',
      },
    },
    body_1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      textSizeAdjust: '100%',
      width: '478px',
      [theme.breakpoints.down(1180)]: {
        display: 'none',
      },
    },
    body_1_secondResponsive: {
      flexDirection: 'row',
      alignItems: 'center',
      textSizeAdjust: '100%',
      width: '100%',
      marginBottom: '20px',
      [theme.breakpoints.up(1180)]: {
        display: 'none',
      },
      [theme.breakpoints.down(1180)]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      [theme.breakpoints.down(980)]: {
        display: 'none',
      },
    },
    body_1_thirdResponsive: {
      flexDirection: 'row',
      alignItems: 'center',
      textSizeAdjust: '100%',
      width: '100%',
      marginBottom: '20px',
      [theme.breakpoints.up(980)]: {
        display: 'none',
      },
      [theme.breakpoints.down(980)]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    body_2_thirdResponsive: {
      [theme.breakpoints.up(980)]: {
        display: 'none',
      },
      [theme.breakpoints.down(980)]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    diamond_img: {
      widht: '24px',
      height: '24px',
      cursor: 'pointer',
      margin: '0px 10px 0px 10px',
    },
    diamond_letter: {
      marginRight: '6px',
      color: 'rgb(30, 35, 41)',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
    },
    flagcircle: {
      // borderRadius: '20px',
      // border: 'solid 4px rgb(225 232 242)',
    },
    flag_img: {
      width: '30px',
      height: '30px',
      borderRadius: '25px',
      border: 'solid 4px rgb(234 236 239)',
    },
    title: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '40px',
      marginRight: '5px',
      marginLeft: '5px',
      fontFamily: 'Roboto',
      [theme.breakpoints.down(980)]: {
        fontSize: '22px',
      },
    },
    protect_a: {
      margin: '0px 16px 0px 5px',
      color: 'rgb(228 231 59)',
      textDecoration: 'none',
      cursor: 'point',
    },
    protect_img: {
      cursor: 'pointer',
      backgroundImage: 'url(' + protect_svg + ' )',
      width: '28px',
      height: '28px',
      backgroundSize: 'cover',
      '&:hover': {
        backgroundImage: 'url(' + hover_protect_svg + ' )',
      },
      '&:active': {
        backgroundImage: 'url(' + active_protect_svg + ' )',
      },
      [theme.breakpoints.down(980)]: {
        backgroundImage: 'url(' + protect_svg + ' )',
        width: '24px',
        height: '24px',
      },
    },
    guide_part: {
      margin: '0px 0px 0px 0px',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
    },
    guide_img: {
      width: '28px',
      height: '28px',
      cursor: 'pointer',
      [theme.breakpoints.down(980)]: {
        width: '24px',
        height: '24px',
      },
    },
    guide_letter: {
      marginRight: '8px',
      marginLeft: '10px',
      color: 'rgb(112, 122, 138)',
      fontSize: '14px',
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
      cursor: 'pointer',
      display: 'block',
      [theme.breakpoints.down(980)]: {
        display: 'none',
      },
    },
    body_2: {
      display: 'flex',
      alignItems: 'center',
      width: '413px',
      [theme.breakpoints.down(980)]: {
        display: 'none',
      },
    },
    country_label: {
      fontFamily: 'BinancePlex,Arial,sans-serif!important',
      fontSize: '14px',
      marginRight: '8px',
      lineHeight: '20px',
      letterSpacing: '0.16px',
      color: 'rgb(112, 122, 138)',
      minInlineSize: 'fit-content',
    },
    country_inputContainer: {
      backgroundColor: 'rgb(234, 236, 239)',
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      lineHeight: '1.6',
      height: '40px',
      width: '230px',
      borderRadius: '20px',
      border: 'none',
      // [theme.breakpoints.down(800)]: {
      //   width: '170px',
      // },
    },
    country_input_value: {
      color: 'rgb(183, 189, 198)',
    },
    // -------------
  }),
)
