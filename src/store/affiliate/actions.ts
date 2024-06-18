import { createAsyncThunk } from '@reduxjs/toolkit'
import { affiliateListAPI } from 'store/api/affiliate'

const getAffiliates = createAsyncThunk('promoter/list', async (params: FormData) => {
  try {
    const response = await affiliateListAPI(params)
    return {
      success: true,
      affiliateData: response.data,
    }
  } catch (err) {
    return {
      success: false,
      err: err,
    }
  }
})

export { getAffiliates }
