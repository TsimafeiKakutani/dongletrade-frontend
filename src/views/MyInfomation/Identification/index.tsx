import { Box } from '@material-ui/core'
import Uppart from './components/Up_part'
import CustomProfileCard1 from './components/CustomProfileCard1'
import CustomProfileCard2 from './components/CustomProfileCard2'
import CustomProfileCard3 from './components/CustomProfileCard3'
import Resindex from './components/Res_index'
import { verifyStyle } from './verifyStyle'
export default function Payment() {
  const classes = verifyStyle()
  return (
    <div className={classes.container}>
      <Uppart />
      <Box className={classes.cardsContainer}>
        <CustomProfileCard1 />
        <CustomProfileCard2 />
        <CustomProfileCard3 />
      </Box>
      <Resindex />
    </div>
  )
}
