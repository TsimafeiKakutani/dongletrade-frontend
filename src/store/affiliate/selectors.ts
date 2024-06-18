import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const selectAffiliate = (state: RootState) => state.affiliate.affiliateLists
export const selectAffiliateTotalCnt = (state: RootState) => state.affiliate.totalCnt

export const isLoading = (state: RootState) => state.affiliate.isLoading
