import type { RootState } from '../store'

// Other code such as selectors can use the imported `RootState` type
export const loginActivityRecords = (state: RootState) => state.activityRecord.loginActivityRecords
export const loginActivityCnt = (state: RootState) => state.activityRecord.loginTotalCnt

export const securityActivityRecords = (state: RootState) => state.activityRecord.securityActivityRecords
export const securityActivityCnt = (state: RootState) => state.activityRecord.securityTotalCnt
