import { api } from '@/lib/axios'

export interface getCountSold30DaysResponse {
  amount: number
}

export async function getCountSold30Days() {
  const response = await api.get<getCountSold30DaysResponse>(
    '/sellers/metrics/products/sold',
  )

  return response.data
}
