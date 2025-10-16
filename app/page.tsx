import { StatsCard } from "@/components/dashboard/stats-card"
import { FlightTable } from "@/components/dashboard/flight-table"
import { SLAGrid } from "@/components/dashboard/sla-grid"
import { ETLStatus } from "@/components/dashboard/etl-status"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { generateFlights, generateSLAMetrics, generateETLJobs, generatePerformanceMetrics } from "@/lib/simulated-data"
import { PlaneIcon, ClockIcon, AlertTriangleIcon, TrendingUpIcon, DatabaseIcon } from "lucide-react"

export default function DashboardPage() {
  const flights = generateFlights()
  const slaMetrics = generateSLAMetrics()
  const etlJobs = generateETLJobs()
  const performanceData = generatePerformanceMetrics()

  // Calculate summary stats
  const totalFlights = flights.length
  const onTimeFlights = flights.filter(
    (f) => f.status === "on-time" || (f.delayMinutes === 0 && f.status !== "cancelled"),
  ).length
  const delayedFlights = flights.filter((f) => f.status === "delayed" || f.delayMinutes > 0).length
  const avgDelay = flights.reduce((sum, f) => sum + f.delayMinutes, 0) / flights.length
  const onTimePercentage = ((onTimeFlights / totalFlights) * 100).toFixed(1)

  const criticalSLAs = slaMetrics.filter((m) => m.status === "critical").length
  const warningSLAs = slaMetrics.filter((m) => m.status === "warning").length

  const failedETL = etlJobs.filter((j) => j.status === "failed").length
  const runningETL = etlJobs.filter((j) => j.status === "running").length

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-balance">Flight Operations Dashboard</h1>
            <p className="mt-2 text-muted-foreground">Real-time monitoring and analytics for airline operations</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 border border-border">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <StatsCard
            title="Total Flights"
            value={totalFlights}
            icon={<PlaneIcon className="h-4 w-4" />}
            status="neutral"
          />
          <StatsCard
            title="On-Time Performance"
            value={`${onTimePercentage}%`}
            change={2.3}
            trend="down"
            icon={<ClockIcon className="h-4 w-4" />}
            status={Number.parseFloat(onTimePercentage) >= 85 ? "good" : "warning"}
          />
          <StatsCard
            title="Delayed Flights"
            value={delayedFlights}
            icon={<AlertTriangleIcon className="h-4 w-4" />}
            status={delayedFlights > 10 ? "warning" : "good"}
          />
          <StatsCard
            title="Avg Delay"
            value={`${avgDelay.toFixed(0)}m`}
            change={5.1}
            trend="up"
            icon={<TrendingUpIcon className="h-4 w-4" />}
            status={avgDelay > 20 ? "warning" : "good"}
          />
          <StatsCard
            title="ETL Pipeline"
            value={failedETL > 0 ? "Issues" : "Healthy"}
            icon={<DatabaseIcon className="h-4 w-4" />}
            status={failedETL > 0 ? "critical" : "good"}
          />
        </div>

        {/* SLA Metrics */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">SLA Compliance</h2>
          <SLAGrid metrics={slaMetrics} />
        </div>

        {/* Performance Chart */}
        <PerformanceChart data={performanceData} />

        {/* Flight Status Table */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Active Flights</h2>
          <FlightTable flights={flights} />
        </div>

        {/* ETL Status */}
        <ETLStatus jobs={etlJobs} />
      </div>
    </div>
  )
}
