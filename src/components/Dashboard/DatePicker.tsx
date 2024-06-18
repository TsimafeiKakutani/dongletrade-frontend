import { useStyles } from './Style'
import { isoDatetoString } from '../../common/utils'

// import { DateRangePicker } from 'materialui-daterange-picker'
import { Button } from '@material-ui/core'

import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/daterangepicker.css'

export interface DatePickerProps {
  startDate: any
  endDate: any
  handleDatepicker: (timestamp1: any, timestamp2: any) => void
}

function DatePicker({ startDate, endDate, handleDatepicker }: DatePickerProps) {
  const classes = useStyles()

  const handleCancel = () => {}

  const handleEvent = (event: React.ChangeEvent<{}>, picker: any) => {
    let start_res = picker.startDate._d.getTime()
    let end_res = picker.endDate._d.getTime()
    handleDatepicker(start_res, end_res)
  }
  return (
    <>
      <DateRangePicker
        initialSettings={{
          timePicker: true,
          endDate: '12/11/2021',
          locale: {
            format: 'MM/DD/YYYY hh:mm A',
          },
        }}
        onApply={handleEvent}
        onCancel={handleCancel}
      >
        <Button className={classes.datePickerBtn} aria-haspopup="true" disableRipple>
          <span className={classes.datePlaceholder}>
            {startDate && endDate
              ? isoDatetoString(startDate) + ' - ' + isoDatetoString(endDate)
              : 'Start Date - End Date'}
          </span>
          <i className={'far fa-calendar-alt'} />
        </Button>
      </DateRangePicker>
    </>
  )
}

export default DatePicker
