import React, { useState, useEffect } from 'react'
import { Box, TableRow, TableCell, Typography, TableFooter } from '@material-ui/core'
import MuiTable from '@material-ui/core/Table'
import jwt_decode from 'jwt-decode'

import RecordsNotFoundIcon from 'assets/image/RecordsNotFound.svg'
import { StyledTablePagination } from 'components/Dashboard/Pagination/Style'
import Table from 'components/Dashboard/Table'
import TablePaginationActions from 'components/Dashboard/Pagination'
import { useStyles } from 'components/Dashboard/Style'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { selectAffiliate, selectAffiliateTotalCnt } from 'store/affiliate/selectors'
import { getAffiliates } from 'store/affiliate/actions'
import { dateConvert } from 'common/utils'

interface MyToken {
  userId: string
}

function MyAffiliates() {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [rows, setRows] = useState<any>()
  const [curPage, setCurPage] = useState(0)
  const rowsPerPage = 10
  const [rowsCnt, setRowsCnt] = useState(0)

  let decoded: any = []

  if (localStorage.jwtToken) {
    decoded = jwt_decode<MyToken>(localStorage.jwtToken)
  }

  const affiliateList = useAppSelector(selectAffiliate)
  const totalCnt = useAppSelector(selectAffiliateTotalCnt)

  useEffect(() => {
    const formData = new FormData()
    formData.append('user_id', decoded?.userId)
    formData.append('cur_page', curPage.toString())
    formData.append('per_page', rowsPerPage.toString())

    dispatch(getAffiliates(formData))
  }, [dispatch, curPage, rowsPerPage, decoded?.userId])

  useEffect(() => {
    setRowsCnt(totalCnt)
    setRows(affiliateList)
  }, [affiliateList, totalCnt])

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurPage(newPage)
  }

  const columns = ['Tier', 'Name', 'Joined Date']

  const tableColumns = columns?.map((column) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ))

  const tableRows = rows?.map((row: any) => (
    <TableRow key={row.CreatedAt}>
      <TableCell className={classes.tableHeaderCell} align="left">
        {row.Email}
      </TableCell>
      <TableCell className={classes.tableHeaderCell} align="left">
        {row.Name}
      </TableCell>
      <TableCell className={classes.tableHeaderCell} align="left">
        {dateConvert(row.CreatedAt)}
      </TableCell>
    </TableRow>
  ))

  const emptyTableRows = (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell} colSpan={12} style={{ textAlign: 'center' }}>
        <Box my="48px">
          <img src={RecordsNotFoundIcon} alt="icon" />
          <Typography className={classes.noRecords}>No records found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  )

  return (
    <>
      <Typography className={classes.paragraphTitle}>My Affiliates</Typography>
      <Box mt="24px">
        <Table columns={tableColumns} rows={tableRows} emptyTableRows={rows && emptyTableRows} />
      </Box>
      <Box className={classes.perPageDiv2}>
        <MuiTable style={{ width: 'auto' }}>
          <TableFooter>
            <TableRow>
              <StyledTablePagination
                colSpan={3}
                count={rowsCnt}
                rowsPerPage={rowsPerPage}
                page={curPage}
                onPageChange={onPageChange}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </MuiTable>
      </Box>
    </>
  )
}

export default MyAffiliates
