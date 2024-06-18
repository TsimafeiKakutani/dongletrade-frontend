import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAffiliates } from './actions'
import type { AffiliateState } from './types'

const PREFIX = 'promter'

const initialState: AffiliateState = {
  affiliateLists: [],
  totalCnt: 0,
  isLoading: true,
}

const setAffilate = (state: AffiliateState, affiliateData: any) => {
  state.isLoading = false
  if (affiliateData.Success === true) {
    if (affiliateData.Data !== null) {
      state.affiliateLists = affiliateData.Data
      state.totalCnt = affiliateData.TotalCnt
    } else {
      state.affiliateLists = []
    }
  } else {
    state.affiliateLists = []
    //set error state here
  }
}

export const AffiliateSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAffiliates.fulfilled.type, (state: AffiliateState, action: PayloadAction<any>) => {
        if (action.payload.success) {
          setAffilate(state, action.payload.affiliateData)
        } else {
          console.log('get affiliate error:', action.payload.err)
        }
      })
      .addCase(getAffiliates.pending.type, (state: AffiliateState) => {
        state.isLoading = true
      })
  },
})

export { getAffiliates }

export default AffiliateSlice.reducer
