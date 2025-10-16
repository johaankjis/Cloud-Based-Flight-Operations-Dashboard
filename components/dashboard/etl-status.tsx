import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ETLJob } from "@/lib/simulated-data"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { CheckCircle2Icon, XCircleIcon, Loader2Icon } from "lucide-react"

interface ETLStatusProps {
  jobs: ETLJob[]
}

export function ETLStatus({ jobs }: ETLStatusProps) {
  const statusConfig = {
    running: {
      icon: Loader2Icon,
      color: "bg-info/20 text-info border-info/30",
      iconColor: "text-info",
    },
    completed: {
      icon: CheckCircle2Icon,
      color: "bg-success/20 text-success border-success/30",
      iconColor: "text-success",
    },
    failed: {
      icon: XCircleIcon,
      color: "bg-destructive/20 text-destructive border-destructive/30",
      iconColor: "text-destructive",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">ETL Pipeline Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job) => {
            const config = statusConfig[job.status]
            const StatusIcon = config.icon

            return (
              <div
                key={job.id}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
              >
                <div className="flex items-center gap-4">
                  <StatusIcon className={cn("h-5 w-5", config.iconColor, job.status === "running" && "animate-spin")} />
                  <div>
                    <div className="font-semibold">{job.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Last run {formatDistanceToNow(job.lastRun, { addSuffix: true })}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className={cn("mb-2", config.color)}>
                    {job.status}
                  </Badge>
                  <div className="text-sm text-muted-foreground">{job.recordsProcessed.toLocaleString()} records</div>
                  <div className="text-xs text-muted-foreground">{job.duration}s duration</div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
