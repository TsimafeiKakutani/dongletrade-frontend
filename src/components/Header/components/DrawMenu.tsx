import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import CloseIcon from '@material-ui/icons/Close'

import { useStyles } from '../Style'
// import Wallet from '../../../assets/image/wallet.svg'
import Logout from '../../../assets/image/logout.svg'

interface MyToken {
  email: string
}

interface DrawMenuProps {
  getCloseState: (isClosed: boolean) => void
  setOpenCurrency: (isOpen: number) => void
}

function DrawMenu({ getCloseState, setOpenCurrency }: DrawMenuProps) {
  const classes = useStyles()

  // const handleClickWallet = () => {
  //   if (localStorage.jwtToken) {
  //     window.location.href = '/wallet'
  //   } else {
  //     window.location.href = '/login'
  //   }
  // }

  const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  const [token, setToken] = React.useState('')

  useEffect(() => {
    if (localStorage.jwtToken) {
      let decoded = jwt_decode<MyToken>(localStorage.jwtToken)
      setToken(decoded.email)
    }
  }, [])

  return (
    <div className={classes.drawManuSide}>
      <div className={classes.closeDiv}>
        <CloseIcon onClick={() => getCloseState(false)} className={classes.closeIcon} />
      </div>
      {localStorage.jwtToken ? (
        <div className={classes.drawLink}>
          <span className={classes.drawText}>{token?.replace(token.slice(2, 11), '***')}</span>
        </div>
      ) : (
        <div>
          <div className={classes.loginDiv}>
            <Link to="login" style={{ textDecoration: 'none', color: 'black' }}>
              <span>Log In</span>
            </Link>
          </div>
          <div className={classes.signupDiv}>
            <Link to="register" style={{ textDecoration: 'none', color: 'black' }}>
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}

      {localStorage.jwtToken ? (
        <div>
          <div className={classes.drawLink}>
            <Link to="/my/dashboard" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <PermIdentityIcon className={classes.drawIcon} /> &nbsp;
              <span className={classes.drawText}>Dashboard</span>
            </Link>
          </div>
          <div className={classes.drawLink}>
            <Link to="/wallet" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <AccountBalanceWalletIcon className={classes.drawIcon} />
              &nbsp;
              <span className={classes.drawText}>Wallet</span>
            </Link>
          </div>
          <div className={classes.drawLink}>
            <Link to="/my/affiliate" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <SupervisedUserCircleIcon className={classes.drawIcon} />
              &nbsp;
              <span className={classes.drawText}>Refer and Earn</span>
            </Link>
          </div>
          <div className={classes.drawLink}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span>
                <img src={Logout} alt="icon" className={classes.drawIcon} />
                &nbsp;
              </span>
              <span onClick={() => logOut()} className={classes.drawText}>
                Log Out
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* <div className={classes.drawLink}>
        <span
          onClick={() => setOpenCurrency(0)}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <LanguageOutlinedIcon className={classes.drawIcon} />
          <span className={classes.drawText}>Language</span>
        </span>
      </div>
      <div className={classes.drawLink}>
        <span
          onClick={() => setOpenCurrency(0)}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <MonetizationOnOutlinedIcon className={classes.drawIcon} />
          <span className={classes.drawText}>Currency</span>
        </span>
      </div> */}
    </div>
  )
}

export default DrawMenu
