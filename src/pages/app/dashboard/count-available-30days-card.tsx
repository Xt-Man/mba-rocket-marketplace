import { useQuery } from 'react-query'

import { getCountAvailable30Days } from '@/api/get-count-available-30days'

export function CountAvailable30DaysCard() {
  const { data: countAvailable } = useQuery({
    queryKey: ['metrics', 'available-30days'],
    queryFn: getCountAvailable30Days,
  })

  return (
    <div className="flex min-h-40 min-w-52 items-center justify-between gap-2 rounded-lg bg-zinc-400 p-2">
      <div className="flex flex-1 justify-center">Icon</div>
      <div className="flex flex-1 flex-col">
        <span>{countAvailable?.amount}</span>
        <span>Produtos</span>
        <span>anunciados</span>
      </div>
    </div>
  )
}
