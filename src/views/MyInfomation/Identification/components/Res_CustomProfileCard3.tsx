import { Res_CustomProfileCardStyle_2 } from './Res_CustomProfileCardStyle_2'
import ActionButton from 'components/Dashboard/ActionButton'
import 'assets/font/style.css'
import address_svg from 'assets/image/verify/address.svg'

export default function Res_CustomProfileCard3() {
  const classes = Res_CustomProfileCardStyle_2()

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <span style={{ fontWeight: 500 }}>Requirements</span>
        </div>
        <div className={classes.body1}>
          <div className={classes.row}>
            <div>
              <img src={address_svg} className={classes.svg_icon} alt="address" />
            </div>
            <span className={classes.row_context}> Proof of address</span>
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
        {/* --------------- */}
        <div className={classes.fixed_block}>
          <div className={classes.row}>
            <div className={classes.row_icon}>
              <i className={'icon-coinmarketcap'} />
            </div>
            <span className={classes.row_context}>Review time: 10 days</span>
          </div>
          <div>
            <ActionButton type="yellow" disabled={true} className={classes.row_btn}>
              Unavailable
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  )
}
