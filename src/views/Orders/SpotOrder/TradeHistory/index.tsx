import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
// material-ui
import { Box, Typography, Grid, IconButton, Drawer, TableRow, TableCell, TableFooter } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// external components
import SearchableSelectForm from 'components/Dashboard/SearchableSelectForm'
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import DatePicker from 'components/Dashboard/DatePicker'
import Table from 'components/Dashboard/Table'
import MuiTable from '@material-ui/core/Table'
//style
import { useStyles } from 'components/Dashboard/Style'
import ActionButton from 'components/Dashboard/ActionButton'
import { dateConvert } from 'common/utils'
import { tradehistory } from 'store/orderinfo/selectors'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { getTradeHistory } from 'store/orderinfo'
import { showAlert } from 'store/alert'
import { OrderType } from 'config/constants'

import {
  StyledTablePagination,
  StyledRowsPerPageBox,
  StyledNativeSelect,
  BootstrapInput,
} from 'components/Dashboard/Pagination/Style'
import TablePaginationActions from 'components/Dashboard/Pagination'
import { GetCoinInfoList } from 'hooks/orderFormAxios'
import notFoundIcon from 'assets/image/not-found.svg'

interface MyToken {
  userId: string
}

function TradeHistory() {
  const classes = useStyles()
  const columns = ['Date', 'Pair', 'Side', 'Price', 'Filled', 'Fee', 'Total']
  const [filterOpen, setFilterOpen] = useState(false)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [optionPair, setOptionPair] = useState<any[]>([])
  const optionSide = ['Buy', 'Sell']

  const [selectedPair, setSelectedPair] = useState('All')
  const [selectedSide, setSelectedSide] = useState('All')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const dispatch = useAppDispatch()

  const tradeHistoryData = useAppSelector(tradehistory)
  let decoded: any = []
  const rows: any = tradeHistoryData?.list?.Data
  const rowsCnt = tradeHistoryData?.list?.TotalCnt

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
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
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('start_date', '')
    formData.append('pair', '')
    formData.append('order_side', '')
    formData.append('end_date', '')
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    dispatch(getTradeHistory(formData))
  }

  const handleSearch = () => {
    let start_res = parseInt(startDate) / 1000
    let end_res = parseInt(endDate) / 1000
    let orderside =
      selectedSide === 'Sell' ? `${OrderType.ORDER_SELL}` : selectedSide === 'Buy' ? `${OrderType.ORDER_SELL}` : ''
    let orderpair = selectedPair === 'All' ? '' : selectedPair
    const formData = new FormData()
    formData.append('user_id', decoded.userId)
    formData.append('start_date', start_res.toString())
    formData.append('end_date', end_res.toString())
    formData.append('pair', orderpair)
    formData.append('order_side', orderside)
    formData.append('per_page', `${rowsPerPage}`)
    formData.append('cur_page', `${page}`)
    dispatch(getTradeHistory(formData))
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
      <TableCell className={classes.tableCell}>{dateConvert(row?.Timestamp)}</TableCell>
      <TableCell className={classes.tableCell}>{row.Pair}</TableCell>
      <TableCell className={classes.tableCell}>
        <Typography
          variant="body1"
          className={row?.Side === OrderType.ORDER_BUY ? classes.fontColor5 : classes.fontColor4}
        >
          {row?.side === OrderType.ORDER_BUY ? 'Buy' : 'Sell'}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>{row?.Price?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row?.Excuted?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row?.Fee?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{(row?.Price * row?.Excuted)?.toFixed(3)}</TableCell>
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
      <ContainerHeader title="Spot" subtitle="Trade History" exportTooltipTitle="Export Order History" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar}>
          <Grid container>
            <Grid item xs={12} lg={3} className={classes.gridItemLeft}>
              <span className={classes.spacing2}>
                <DatePicker startDate={startDate} endDate={endDate} handleDatepicker={handleDatePicker} />
              </span>
            </Grid>
            <Grid item xs={12} lg={9} className={classes.gridItemRight}>
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
              <ActionButton type="gradient" onClick={handleSearch} className={classes.spacing2}>
                Search
              </ActionButton>
              <ActionButton type="normal" onClick={handleReset} className={classes.spacing2}>
                Reset
              </ActionButton>
            </Grid>
            <Grid item xs={12} className={classes.responsiveActionBar1}>
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
              <ActionButton onClick={handleReset} type="normal" className={classes.filterDrawerFooterButton}>
                Reset
              </ActionButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

export default TradeHistory
