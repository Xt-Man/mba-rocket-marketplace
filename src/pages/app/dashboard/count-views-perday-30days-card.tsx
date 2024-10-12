import { useQuery } from 'react-query'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import { getCountViewsPerDay30Days } from '@/api/get-count-views-perday-30days'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { DateUtils } from '@/lib/date-utils'

export function CountViewsPerDay30DaysCard() {
  const { data: countViewsPerDay } = useQuery({
    queryKey: ['metrics', 'viewsperday-30days'],
    queryFn: getCountViewsPerDay30Days,
  })

  const chartData = countViewsPerDay
    ? countViewsPerDay.viewsPerDay.map((item) => {
        return {
          day: DateUtils.getDayFromStringDateISO(item.date),
          amount: item.amount,
        }
      })
    : []

  const chartConfig = {
    desktop: {
      label: 'Visitantes',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig

  return (
    <div className="flex h-full flex-col justify-between gap-2 rounded-lg bg-zinc-400 p-2">
      <div className="flex justify-between">
        <span>Visitantes</span>
        <span>período</span>
      </div>
      <div className="flex flex-1">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="amount" nameKey="day" />}
            />
            <Line
              dataKey="amount"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  )
}
