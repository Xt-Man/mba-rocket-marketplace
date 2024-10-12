import { Helmet } from 'react-helmet-async'

import { CountAvailable30DaysCard } from './count-available-30days-card'
import { CountSold30DaysCard } from './count-sold-30days-card'
import { CountViews30DaysCard } from './count-views-30days-card'
import { CountViewsPerDay30DaysCard } from './count-views-perday-30days-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <h1>Últimos 30 dias</h1>
      <h2>Confira as estatísticas da sua loja no último mês</h2>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <CountSold30DaysCard />
          <CountAvailable30DaysCard />
          <CountViews30DaysCard />
        </div>
        <div>
          <CountViewsPerDay30DaysCard />
        </div>
      </div>
    </>
  )
}
