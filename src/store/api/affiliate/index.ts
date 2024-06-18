/** @format */

import axios from 'axios'
import { REQUEST_API_URL } from 'config/config'

const PREFIX = 'promoter'

export const affiliateListAPI = async (params: FormData) => axios.post(`${REQUEST_API_URL}/${PREFIX}/list`, params)
