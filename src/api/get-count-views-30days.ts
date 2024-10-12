import { api } from '@/lib/axios'

export interface getCountViews30DaysResponse {
  amount: number
}

export async function getCountViews30Days() {
  const response = await api.get<getCountViews30DaysResponse>(
    '/sellers/metrics/views',
  )

  return response.data
}
