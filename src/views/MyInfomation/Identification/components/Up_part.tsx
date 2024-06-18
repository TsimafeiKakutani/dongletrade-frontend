import React, { useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { Up_partStyle } from './Up_partStyle'
import { InputStyle } from './InputStyle'
import 'assets/font/style.css'
import protect_svg from 'assets/image/verify/protect.svg'
import guide_svg from 'assets/image/verify/guide.svg'
import diamond_svg from 'assets/image/verify/diamond.svg'
import { ClickAwayListener, Avatar } from '@material-ui/core'
import PhoneNumModal from './PhoneNumModal'
import { withStyles } from '@material-ui/styles'

const tooltipstyles = {
  tooltip: {
    color: 'white',
    fontSize: '12px',
    opacity: '0.8',
    padding: '8px',
  },
}
const CustomTooltip = withStyles(tooltipstyles)(Tooltip)
export default function Up_part() {
  const classes = Up_partStyle()
  const classes_input = InputStyle()

  // const [phoneNum, setPhoneNum] = useState('')
  // const [clickPhoneNum, setClickPhoneNum] = useState(false)
  const [phoneModalopen, setPhoneModalOpen] = useState(false)
  // const [phoneNumberDrawOpen, setPhoneNumberDrawOpen] = useState(false)
  // const [phoneNumValid, setPhoneNumValid] = useState('')

  const [flag, setFlag] = useState('https://cdn.kcak11.com/CountryFlags/countries/us.svg')
  // const [countryCode, setCountryCode] = useState('+1')

  // const handlePhoneNumChange = (value: any) => {
  //   setPhoneNum(value)
  //   setPhoneNumValid('')
  // }
  const handleGetPhoneNumber = (phone: any) => {
    setPhoneModalOpen(false)
    // setPhoneNumberDrawOpen(false)
    setFlag(phone.flag)
    // setCountryCode(phone.dialCode)
  }

  return (
    <>
      <div className={classes.root_2}>
        {/* 1 step */}
        <div className={classes.body_1}>
          <div className={classes.title}>Personal Verification</div>
          <CustomTooltip title="Your personal information here is protected by Zilionixx">
            <a href="/" className={classes.protect_a}>
              <div className={classes.protect_img} />
            </a>
          </CustomTooltip>
          <div className={classes.guide_part}>
            <img src={guide_svg} className={classes.guide_img} alt="guide" />
            <div className={classes.guide_letter}>Guide</div>
          </div>
        </div>
        {/* 2 step */}
        <div className={classes.body_1_secondResponsive}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.title}>Personal Verification</div>
            <CustomTooltip title="Your personal information here is protected by Zilionixx">
              <a href="/" className={classes.protect_a}>
                <div className={classes.protect_img} />
              </a>
            </CustomTooltip>
          </div>

          <div className={classes.guide_part}>
            <img src={guide_svg} className={classes.guide_img} alt="guide" />
            <div className={classes.guide_letter}>Guide</div>
          </div>
        </div>
        {/* 3 step */}
        <div className={classes.body_1_thirdResponsive}>
          <div className={classes.title}>Personal Verification</div>
          <div style={{ display: 'flex' }}>
            <CustomTooltip title="Your personal information here is protected by Zilionixx">
              <a href="/" className={classes.protect_a}>
                <img src={protect_svg} className={classes.protect_img} alt="protect" />
              </a>
            </CustomTooltip>

            <div className={classes.guide_part}>
              <img src={guide_svg} className={classes.guide_img} alt="guide" />
            </div>
          </div>
        </div>

        {/* <Grid lg={2} xl={2}></Grid> */}
        <div className={classes.body_2}>
          <div className={classes.country_label}>Residential country/region:</div>
          <div className={classes.country_inputContainer}>
            <ClickAwayListener onClickAway={() => {}}>
              <div className={classes_input.phoneNumDiv}>
                <div onClick={() => setPhoneModalOpen(false)} className={classes_input.countrySide}>
                  <Avatar src={flag} alt="logo" className={classes_input.flag} />
                </div>
              </div>
            </ClickAwayListener>
            <div>
              <span className={classes_input.countryName}>United State</span>
            </div>

            <PhoneNumModal
              modalopen={phoneModalopen}
              handleClose={() => setPhoneModalOpen(false)}
              handleClickNumber={handleGetPhoneNumber}
            />
          </div>
        </div>

        <div className={classes.body_2_thirdResponsive}>
          <CustomTooltip title="Your account is currently not verified" arrow>
            <div className={classes.country_inputContainer} style={{ width: '200px', height: '33px' }}>
              <img src={diamond_svg} className={classes.diamond_img} alt="diamond" />
              <span className={classes.diamond_letter}>View Current Features</span>
            </div>
          </CustomTooltip>
          {/* <div className={classes.flagcircle}>
            <img src={flag} className={classes.flag_img} />
          </div> */}
          <div className={classes.flagcircle}>
            <Avatar src={flag} alt="logo" className={classes.flag_img} />
          </div>
        </div>
      </div>
    </>
  )
}
