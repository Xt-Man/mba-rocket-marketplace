import { api } from '@/lib/axios'

export interface getCountAvailable30DaysResponse {
  amount: number
}

export async function getCountAvailable30Days() {
  const response = await api.get<getCountAvailable30DaysResponse>(
    '/sellers/metrics/products/available',
  )

  return response.data
}
