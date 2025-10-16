"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { PerformanceMetric } from "@/lib/simulated-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { format } from "date-fns"

interface PerformanceChartProps {
  data: PerformanceMetric[]
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const chartData = data.map((metric) => ({
    time: format(metric.timestamp, "HH:mm"),
    "On-Time %": metric.onTimePerformance.toFixed(1),
    "Avg Delay (min)": metric.avgDelay.toFixed(1),
    Flights: metric.flightsProcessed,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">24-Hour Performance Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} interval={3} />
            <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#131824",
                border: "1px solid #1e293b",
                borderRadius: "0.5rem",
                color: "#e8edf4",
              }}
            />
            <Legend wrapperStyle={{ color: "#94a3b8" }} />
            <Line type="monotone" dataKey="On-Time %" stroke="#10b981" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Avg Delay (min)" stroke="#f59e0b" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Flights" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
