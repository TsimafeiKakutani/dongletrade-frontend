import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLoginActivityRecord, getSecurityActivityRecord } from './action'
import type { recordState } from './types'

const PREFIX = 'record'

const initialState: recordState = {
  loginActivityRecords: [],
  loginTotalCnt: 0,

  securityActivityRecords: [],
  securityTotalCnt: 0,
}

const setLoginActivityRecords = (state: recordState, records: any) => {
  if (records.Success === true && records.Data !== null) {
    state.loginActivityRecords = records.Data
    state.loginTotalCnt = records.TotalCnt
  } else {
    state.loginActivityRecords = []
    state.loginTotalCnt = 0
  }
}

const setSecurityActivityRecords = (state: recordState, records: any) => {
  if (records.Success === true && records.Data !== null) {
    state.securityActivityRecords = records.Data
    state.securityTotalCnt = records.TotalCnt
  } else {
    state.securityActivityRecords = []
    state.securityTotalCnt = 0
  }
}

export const chatReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginActivityRecord.fulfilled.type, (state: recordState, action: PayloadAction<any>) => {
        setLoginActivityRecords(state, action.payload)
      })
      .addCase(getSecurityActivityRecord.fulfilled.type, (state: recordState, action: PayloadAction<any>) => {
        setSecurityActivityRecords(state, action.payload)
      })
  },
})

export { getLoginActivityRecord, getSecurityActivityRecord }

export default chatReducer.reducer
