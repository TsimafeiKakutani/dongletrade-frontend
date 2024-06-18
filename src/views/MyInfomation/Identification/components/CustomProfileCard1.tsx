import { CustomProfileCardStyle_1 } from './CustomProfileCardStyle_1'
import 'assets/font/style.css'
import symbol_svg from 'assets/image/verify/symbol.svg'

export default function CustomProfileCard1() {
  const classes = CustomProfileCardStyle_1()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>Current Features</span>
        </div>

        {/* ------body2------ */}
        <div className={classes.body}>
          <div>
            <img src={symbol_svg} className={classes.symbol} alt="symbol" />
          </div>
          <div className={classes.first_sentence}>Your account is currently not verified.</div>
          <div className={classes.second_sentence}>Complete verification to access services on Binane.</div>
        </div>
      </div>
    </>
  )
}
