import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
// material-ui
import { Box, TableRow, TableCell, Typography } from '@material-ui/core'
// external components
import ContainerHeader from 'components/Dashboard/ContainerHeader'
import SelectForm from 'components/Dashboard/SelectForm'
import TabMenu from 'components/Dashboard/TabMenu'
import Table from 'components/Dashboard/Table'
// redux
import { useAppSelector } from 'store/hooks'
import { orderopens } from 'store/orderinfo/selectors'
import { getOrderOpens } from 'store/orderinfo'
import { CancelOrder } from 'hooks/orderFormAxios'
import { showAlert } from 'store/alert'
import { useAppDispatch } from 'store/hooks'
//style
import { useStyles } from 'components/Dashboard/Style'
import { dateConvert } from 'common/utils'
import { OrderType } from 'config/constants'
import BinIcon from 'assets/image/bin.svg'
import notFoundIcon from 'assets/image/not-found.svg'

interface MyToken {
  userId: string
}

function OpenOrders() {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const tabs = ['All', 'Limit Order', 'Stop-Limit Order', 'Limit-Maker']
  const options = ['Cancel all orders']
  const columns = ['Date', 'Pair', 'Type', 'Side', 'Price', 'Amount', 'Filled', 'Total', 'Trigger Conditions', 'Action']

  const [tabKey, setTabKey] = useState(tabs[0])
  let decoded: any = []
  const orderOpenData = useAppSelector(orderopens)
  const rows: any = orderOpenData?.list?.Data
  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const handleClickTab = (tab: string) => {
    if (tab === tabs[0] || tab === tabs[1]) setTabKey(tab)
  }

  const handleClickStatus = (value: string) => {}

  const onClickCancelOrder = async (id: string) => {
    var formData = new FormData()
    formData.append('order_id', id)
    formData.append('user_id', decoded?.userId?.toString())

    CancelOrder(formData).then((res: any) => {
      if (res === undefined) {
        dispatch(showAlert({ message: 'Network connection error', severity: 'error' }))
        return
      }

      if (res?.data?.Success) {
        const getOpenOrderData = new FormData()
        getOpenOrderData.append('user_id', decoded?.userId?.toString())
        dispatch(getOrderOpens(getOpenOrderData))
      }
    })
  }

  useEffect(() => {
    const openOrderFormData = new FormData()
    openOrderFormData.append('user_id', decoded?.userId)
    dispatch(getOrderOpens(openOrderFormData))
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tableColumns = columns.map((column, index) =>
    index === 8 ? (
      <TableCell key={index} className={classes.tableHeaderCell} style={{ textAlign: 'center' }}>
        {column}
      </TableCell>
    ) : (
      <TableCell key={index} className={classes.tableHeaderCell}>
        {column}
      </TableCell>
    ),
  )

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
      <TableCell className={classes.tableCell}>{row?.price?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row?.amount?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{row.filled?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell}>{(row?.price * row?.amount)?.toFixed(3)}</TableCell>
      <TableCell className={classes.tableCell} style={{ textAlign: 'center' }}>
        -
      </TableCell>
      <TableCell className={classes.tableCell}>
        <button onClick={() => onClickCancelOrder(row?._id)} className={classes.cancelBtn}>
          <img src={BinIcon} alt="icon" className={classes.bin} width={14} height={14} />
        </button>
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
      <ContainerHeader title="Spot" subtitle="Open Orders" />

      <Box className={classes.containerBody}>
        <Box className={classes.actionBar} display="flex" justifyContent="space-between">
          <TabMenu tabs={tabs} tabKey={tabKey} handleClickTab={handleClickTab} className={classes.tabMenuVisible} />
          <SelectForm options={tabs} handleClickTab={handleClickStatus} className={classes.selectMenuVisible} />
          <SelectForm options={options} handleClickTab={handleClickStatus} disabled={true} />
        </Box>

        <Table columns={tableColumns} rows={tableRows} emptyTableRows={emptyTableRows} />
      </Box>
    </Box>
  )
}

export default OpenOrders
