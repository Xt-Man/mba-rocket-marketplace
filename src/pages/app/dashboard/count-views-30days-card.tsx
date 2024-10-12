import { useQuery } from 'react-query'

import { getCountViews30Days } from '@/api/get-count-views-30days'

export function CountViews30DaysCard() {
  const { data: countViews } = useQuery({
    queryKey: ['metrics', 'views-30days'],
    queryFn: getCountViews30Days,
  })

  return (
    <div className="flex min-h-40 min-w-52 items-center justify-between gap-2 rounded-lg bg-zinc-400 p-2">
      <div className="flex flex-1 justify-center">Icon</div>
      <div className="flex flex-1 flex-col">
        <span>{countViews?.amount}</span>
        <span>Pessoas</span>
        <span>visitantes</span>
      </div>
    </div>
  )
}
