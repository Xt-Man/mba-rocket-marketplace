import { useQuery } from 'react-query'

import { getCountSold30Days } from '@/api/get-count-sold-30days'

export function CountSold30DaysCard() {
  const { data: countSold } = useQuery({
    queryKey: ['metrics', 'sold-30days'],
    queryFn: getCountSold30Days,
  })

  return (
    <div className="flex min-h-40 min-w-52 items-center justify-between gap-2 rounded-lg bg-zinc-400 p-2">
      <div className="flex flex-1 justify-center">Icon</div>
      <div className="flex flex-1 flex-col">
        <span>{countSold?.amount}</span>
        <span>Produtos</span>
        <span>vendidos</span>
      </div>
    </div>
  )
}
