import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
// material-ui
import {
  Box,
  FormControlLabel,
  Typography,
  Grid,
  IconButton,
  Drawer,
  TableRow,
  TableCell,
  TableFooter,
} from '@material-ui/core'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'
import MuiTable from '@material-ui/core/Table'

// external components
import SearchableSelectForm from 'components/Dashboard/SearchableSelectForm'
import DatePicker from 'components/Dashboard/DatePicker'
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import Table from 'components/Dashboard/Table'

//style
import { useStyles } from 'components/Dashboard/Style'
import ActionButton from 'components/Dashboard/ActionButton'
import { dateConvert } from 'common/utils'
import { OrderType, OrderStatus } from 'config/constants'
import { orderhistory } from 'store/orderinfo/selectors'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getOrderHistory } from 'store/orderinfo'
import { showAlert } from 'store/alert'

import {
  StyledTablePagination,
  StyledRowsPerPageBox,
  StyledNativeSelect,
  BootstrapInput,
} from 'components/Dashboard/Pagination/Style'
import TablePaginationActions from 'components/Dashboard/Pagination'
import { GetCoinInfoList } from 'hooks/orderFormAxios'
import notFoundIcon from 'assets/image/not-found.svg'

const StyledCheckbox = withStyles({
  root: {
    color: '#f0b90b',
    padding: '8px',
    '&$checked': {
      color: '#f0b90b',
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

interface MyToken {
  userId: string
}

function OrderHistory() {
  const classes = useStyles()
  const columns = [
    'Date',
    'Pair',
    'Type',
    'Side',
    'Average',
    'Price',
    'Executed',
    'Amount',
    'Total',
    'Trigger Conditions',
    'Status',
  ]

  const [isChecked, setIsChecked] = useState(false)
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [optionPair, setOptionPair] = useState<any[]>([])
  const optionSide = ['Buy', 'Sell']

  const [selectedPair, setSelectedPair] = useState('All')
  const [selectedSide, setSelectedSide] = useState('All')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const dispatch = useAppDispatch()

  const orderHistoryData = useAppSelector(orderhistory)
  let decoded: any = []
  const rows: any = orderHistoryData?.list?.Data
  const rowsCnt = orderHistoryData?.list?.TotalCnt

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const handleChangePerpage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
  }

  const handleDatePicker = (timestamp1: any, timestamp2: any) => {
    setStartDate(timestamp1)
    setEndDate(timestamp2)
  }

  const handleReset = () => {
    setStartDate('')
    setEndDate('')
    setSelectedPair('All')
    setSelectedSide('All')
    setIsChecked(false)
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('order_status', OrderStatus.STATUS_ALL.toString())
    formData.append('start_date', '')
    formData.append('order_side', '')
    formData.append('pair', '')
    formData.append('end_date', '')
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    dispatch(getOrderHistory(formData))
  }

  const handleSearch = () => {
    let start_res = parseInt(startDate) / 1000
    let end_res = parseInt(endDate) / 1000
    let orderStatus = isChecked ? OrderStatus.STATUS_ORDER_FINISHED.toString() : OrderStatus.STATUS_ALL.toString()
    let orderside =
      selectedSide === 'Sell' ? `${OrderType.ORDER_SELL}` : selectedSide === 'Buy' ? `${OrderType.ORDER_BUY}` : ''
    let orderpair = selectedPair === 'All' ? '' : selectedPair
    const formData = new FormData()
    formData.append('user_id', decoded.userId)
    formData.append('start_date', start_res.toString())
    formData.append('end_date', end_res.toString())
    formData.append('order_side', orderside)
    formData.append('pair', orderpair)
    formData.append('order_status', orderStatus)
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    dispatch(getOrderHistory(formData))
  }

  useEffect(() => {
    handleSearch()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])

  useEffect(() => {
    GetCoinInfoList().then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }
      if (res.data.Success) {
        let tem_array: any[] = []
        res.data.Data.forEach((element: any) => {
          tem_array.push(element.Pair)
        })
        setOptionPair(tem_array)
      } else {
        dispatch(showAlert({ message: res.data.Error.Msg, severity: 'error' }))
      }
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tableColumns = columns.map((column) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ))
  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell className={classes.tableCell}>{dateConvert(row?.created_at)}</TableCell>
      <TableCell className={classes.tableCell}>{row.pair}</TableCell>
      <TableCell className={classes.tableCell}>{row.type}</TableCell>
      <TableCell className={classes.tableCell}>
        <Typography
          variant="body1"
          className={row?.side === OrderType.ORDER_BUY ? classes.fontColor5 : classes.fontColor4}
        >
          {row?.side === OrderType.ORDER_BUY ? 'Buy' : 'Sell'}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>{row?.amount?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row?.price?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row.filled?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row?.filled?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{(row?.price * row?.filled)?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell} style={{ textAlign: 'center' }}>
        -
      </TableCell>
      <TableCell className={classes.tableCell}>
        {row.status === OrderStatus.STATUS_ORDER_FINISHED
          ? 'Filled'
          : row.status === OrderStatus.STATUS_ORDER_CANCELLED
          ? 'Canceled'
          : 'Orders'}
      </TableCell>
    </TableRow>
  ))

  const emptyTableRows = (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell} colSpan={12} style={{ textAlign: 'center' }}>
        <Box my="48px">
          <img src={notFoundIcon} alt="not found" className={classes.notfoundIcon}></img>
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <Box className={classes.container}>
      <ContainerHeader title="Spot" subtitle="Order History" exportTooltipTitle="Export Order History" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar}>
          <Grid container>
            <Grid item xs={12} lg={8} className={classes.gridItemLeft}>
              <span className={classes.spacing2}>
                <DatePicker startDate={startDate} endDate={endDate} handleDatepicker={handleDatePicker} />
              </span>
              <SearchableSelectForm
                options={optionPair}
                type="Pair"
                className={classes.spacing1}
                selectedItem={selectedPair}
                handleItem={(item) => setSelectedPair(item)}
              />
              <SearchableSelectForm
                options={optionSide}
                type="Side"
                className={classes.spacing2}
                selectedItem={selectedSide}
                handleItem={(item) => setSelectedSide(item)}
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.gridItemRight}>
              <ActionButton type="gradient" onClick={handleSearch} className={classes.spacing2}>
                Search
              </ActionButton>
              <ActionButton type="normal" onClick={handleReset} className={classes.spacing2}>
                Reset
              </ActionButton>
              <FormControlLabel
                className={classes.checkbox}
                control={<StyledCheckbox checked={isChecked} onChange={handleChange} name="checkedG" />}
                label="Hide all canceled"
              />
            </Grid>
            <Grid item xs={12} className={classes.responsiveActionBar}>
              <FormControlLabel
                className={classes.checkbox}
                control={<StyledCheckbox checked={isChecked} onChange={handleChange} name="checkedG" />}
                label="Hide all canceled"
              />
              <IconButton color="primary" className={classes.filterBtn} onClick={() => setFilterOpen(true)}>
                <i className={clsx('icon-download', classes.checkIcon)} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box mt="24px">
          <Table columns={tableColumns} rows={tableRows} emptyTableRows={emptyTableRows} />
        </Box>
        <Box className={classes.perPageDiv}>
          <StyledRowsPerPageBox>
            <StyledNativeSelect
              id="demo-customized-select-native"
              value={rowsPerPage}
              onChange={handleChangePerpage}
              input={<BootstrapInput />}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </StyledNativeSelect>
          </StyledRowsPerPageBox>
          <MuiTable style={{ width: 'auto' }}>
            <TableFooter>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={rowsCnt ? rowsCnt : 1}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onPageChange}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </MuiTable>
        </Box>
        <Drawer
          anchor="bottom"
          classes={{ paperAnchorBottom: classes.filterDrawer }}
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
        >
          <Box mx="24px" mt="24px" textAlign="right">
            <CloseIcon className={classes.filterClose} onClick={() => setFilterOpen(false)} />
          </Box>
          <Typography className={classes.drawerHeader}>Filter</Typography>
          <Box pt="20px" display="flex" flex="auto" flexDirection="column" justifyContent="space-between">
            <Box px="24px" display="flex" alignItems="center">
              <SearchableSelectForm
                options={optionPair}
                type="Pair"
                className={classes.spacing1}
                selectedItem={selectedPair}
                handleItem={(item) => setSelectedPair(item)}
              />
              <SearchableSelectForm
                options={optionSide}
                type="Side"
                className={classes.spacing2}
                selectedItem={selectedSide}
                handleItem={(item) => setSelectedSide(item)}
              />
            </Box>
            <Box py="24px" className={classes.filterDrawerFooter}>
              <ActionButton onClick={handleSearch} type="gradient" className={classes.filterDrawerFooterButton}>
                Search
              </ActionButton>
              <ActionButton type="normal" onClick={handleReset} className={classes.filterDrawerFooterButton}>
                Reset
              </ActionButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

export default OrderHistory
