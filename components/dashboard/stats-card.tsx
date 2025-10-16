import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  trend?: "up" | "down" | "stable"
  icon?: React.ReactNode
  status?: "good" | "warning" | "critical" | "neutral"
}

export function StatsCard({ title, value, change, trend, icon, status = "neutral" }: StatsCardProps) {
  const statusColors = {
    good: "text-success",
    warning: "text-warning",
    critical: "text-destructive",
    neutral: "text-muted-foreground",
  }

  const trendIcons = {
    up: ArrowUpIcon,
    down: ArrowDownIcon,
    stable: MinusIcon,
  }

  const TrendIcon = trend ? trendIcons[trend] : null

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className={cn("text-3xl font-bold", statusColors[status])}>{value}</div>
          {change !== undefined && TrendIcon && (
            <div className={cn("flex items-center text-sm font-medium", statusColors[status])}>
              <TrendIcon className="mr-1 h-4 w-4" />
              {Math.abs(change)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
