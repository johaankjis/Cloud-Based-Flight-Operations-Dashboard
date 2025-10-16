import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { SLAMetric } from "@/lib/simulated-data"
import { cn } from "@/lib/utils"
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from "lucide-react"

interface SLAGridProps {
  metrics: SLAMetric[]
}

export function SLAGrid({ metrics }: SLAGridProps) {
  const statusColors = {
    good: "text-success",
    warning: "text-warning",
    critical: "text-destructive",
  }

  const progressColors = {
    good: "bg-success",
    warning: "bg-warning",
    critical: "bg-destructive",
  }

  const trendIcons = {
    up: TrendingUpIcon,
    down: TrendingDownIcon,
    stable: MinusIcon,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const TrendIcon = trendIcons[metric.trend]
        const percentage = (metric.actual / metric.target) * 100

        return (
          <Card key={metric.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.metric}</CardTitle>
                <TrendIcon className={cn("h-4 w-4", statusColors[metric.status])} />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className={cn("text-2xl font-bold", statusColors[metric.status])}>{metric.actual}%</span>
                <span className="text-sm text-muted-foreground">Target: {metric.target}%</span>
              </div>
              <Progress
                value={Math.min(percentage, 100)}
                className="h-2"
                indicatorClassName={progressColors[metric.status]}
              />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
