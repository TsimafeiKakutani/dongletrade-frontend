import { Res_CustomProfileCardStyle_2 } from './Res_CustomProfileCardStyle_2'
import ActionButton from 'components/Dashboard/ActionButton'
import 'assets/font/style.css'
import personal_svg from 'assets/image/verify/personal.svg'
import government_svg from 'assets/image/verify/government.svg'
import facial_svg from 'assets/image/verify/facial.svg'
import review_svg from 'assets/image/verify/review.svg'

export default function Res_CustomProfileCard2() {
  const classes = Res_CustomProfileCardStyle_2()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <span style={{ fontWeight: 500 }}>Requirements</span>
        </div>
        <div className={classes.body1}>
          <div className={classes.row}>
            <div className={classes.row_icon}>
              <img src={personal_svg} className={classes.svg_icon} alt="personal" />
            </div>
            <span className={classes.row_context}>Personal information</span>
          </div>

          <div className={classes.row}>
            <div className={classes.row_icon}>
              <img src={government_svg} className={classes.svg_icon} alt="government" />
            </div>
            <div className={classes.row_context}>Government-issued ID</div>
          </div>

          <div className={classes.row}>
            <div className={classes.row_icon}>
              <img src={facial_svg} className={classes.svg_icon} alt="facial" />
            </div>
            <div className={classes.row_context}>Facial recognition</div>
          </div>
        </div>
        {/* ------body2------ */}
        <div className={classes.body2}>
          <div className={classes.title}>
            <span style={{ fontWeight: 500 }}>Features & Limits</span>
          </div>
          <div className={classes.body2_row}>
            <div className={classes.body2_row_title}>Fiat Limits</div>
            <div className={classes.body2_row_context}>
              <div className={classes.body2_row_context1}>Deposit</div>
              <div className={classes.body2_row_context2}>$50K Daily</div>
            </div>
            <div className={classes.body2_row_context}>
              <div className={classes.body2_row_context1}>Withdrawal</div>
              <div className={classes.body2_row_context2}>$50K Daily</div>
            </div>
          </div>
          <div className={classes.body2_row}>
            <div className={classes.body2_row_title}>P2P Transaction Limits</div>
            <div className={classes.body2_row_context}>
              <div className={classes.body2_row_context1}>P2P</div>
              <div className={classes.body2_row_context2}>Unlimited</div>
            </div>
          </div>
          <div className={classes.body2_row}>
            <div className={classes.body2_row_title}>Crypto Limits</div>
            <div className={classes.body2_row_context}>
              <div className={classes.body2_row_context1}>Withdrawal</div>
              <div className={classes.body2_row_context2}>8M BUSD</div>
            </div>
          </div>{' '}
          <div className={classes.body2_row}>
            <div className={classes.body2_row_title}>Other Features</div>
            <div className={classes.body2_row_context}>LPD/OTC/Binance card</div>
          </div>
        </div>
        <div style={{ height: '96px', backgroundColor: 'white' }}></div>
        <div className={classes.fixed_block}>
          <div className={classes.row}>
            <div className={classes.row_icon}>
              <img src={review_svg} className={classes.svg_icon} alt="review" />
            </div>
            <span className={classes.row_context}>Review time: 10 days</span>
          </div>
          <div>
            <ActionButton type="yellow" className={classes.row_btn}>
              Start now
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  )
}
