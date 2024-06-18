import { CustomProfileCardStyle_2 } from './CustomProfileCardStyle_2'
import ActionButton from 'components/Dashboard/ActionButton'
import 'assets/font/style.css'
import review_svg from 'assets/image/verify/review.svg'
import address_svg from 'assets/image/verify/address.svg'

function BodyRows(data: any) {
  const classes = CustomProfileCardStyle_2()
  const handleClick = (data: any) => {}

  return (
    <>
      <div className={classes.body2_row} onMouseOver={() => handleClick(data.rowdata)}>
        <div className={classes.body2_row_title}>{data.rowdata.title}</div>
        <div className={classes.body2_row_context}>
          <span style={{ fontWeight: 500 }}>{data.rowdata.context}</span>
        </div>
      </div>
    </>
  )
}

export default function CustomProfileCard2() {
  const classes = CustomProfileCardStyle_2()
  const body2_rows = [
    { index: 10, title: 'Fiat Deposit & Withdrawal Limits', context: '$200K Daily' },
    { index: 20, title: 'Crypto Withdrawal Limit', context: '8M BUSD Daily' },
    { index: 30, title: 'P2P Transaction Limits', context: 'Unlimited' },
    { index: 40, title: 'Other Features', context: 'LPD/OTC/Zilionixx card' },
  ]

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>Verified Plus</span>
        </div>
        <div className={classes.body1}>
          <div className={classes.row}>
            <div>
              <img src={address_svg} className={classes.svg_icon} alt="address" />
            </div>
            <div className={classes.row_context}>Proof of address</div>
          </div>

          <div className={classes.row}>
            <div className={classes.row_icon}>
              <img src={review_svg} className={classes.svg_icon} alt="review" />
            </div>
            <div className={classes.row_context}>Review time: 10 days</div>
          </div>
        </div>
        <div className={classes.empty_row}></div>
        <div>
          <ActionButton type="yellow" disabled={true} className={classes.row_btn}>
            Unavailable
          </ActionButton>
        </div>
        {/* ------body2------ */}
        <div className={classes.body2}>
          {body2_rows.map((body2_row: any, key: any) => (
            <BodyRows key={key} rowdata={body2_row} />
          ))}
        </div>
      </div>
    </>
  )
}
