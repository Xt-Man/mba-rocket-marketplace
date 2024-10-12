import { api } from '@/lib/axios'

export interface viewsPerDayResponse {
  date: string
  amount: number
}

export interface getCountViewsPerDay30DaysResponse {
  viewsPerDay: viewsPerDayResponse[]
}

export async function getCountViewsPerDay30Days() {
  const response = await api.get<getCountViewsPerDay30DaysResponse>(
    '/sellers/metrics/views/days',
  )

  return response.data
}
