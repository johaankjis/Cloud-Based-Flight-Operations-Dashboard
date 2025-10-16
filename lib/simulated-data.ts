// Simulated flight operations data
export interface Flight {
  id: string
  flightNumber: string
  origin: string
  destination: string
  status: "on-time" | "delayed" | "departed" | "arrived" | "cancelled"
  scheduledDeparture: Date
  actualDeparture: Date | null
  scheduledArrival: Date
  actualArrival: Date | null
  aircraft: string
  gate: string
  delayMinutes: number
}

export interface SLAMetric {
  id: string
  metric: string
  target: number
  actual: number
  status: "good" | "warning" | "critical"
  trend: "up" | "down" | "stable"
}

export interface ETLJob {
  id: string
  name: string
  status: "running" | "completed" | "failed"
  lastRun: Date
  duration: number
  recordsProcessed: number
}

export interface PerformanceMetric {
  timestamp: Date
  onTimePerformance: number
  avgDelay: number
  flightsProcessed: number
}

// Generate simulated flights
export function generateFlights(): Flight[] {
  const airlines = ["AA", "UA", "DL", "SW", "B6"]
  const airports = ["JFK", "LAX", "ORD", "DFW", "ATL", "SFO", "MIA", "BOS", "SEA", "DEN"]
  const aircraft = ["B737", "A320", "B777", "A321", "B787"]
  const statuses: Flight["status"][] = ["on-time", "delayed", "departed", "arrived"]

  const flights: Flight[] = []
  const now = new Date()

  for (let i = 0; i < 50; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)]
    const flightNum = Math.floor(Math.random() * 9000) + 1000
    const origin = airports[Math.floor(Math.random() * airports.length)]
    let destination = airports[Math.floor(Math.random() * airports.length)]
    while (destination === origin) {
      destination = airports[Math.floor(Math.random() * airports.length)]
    }

    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const delayMinutes = status === "delayed" ? Math.floor(Math.random() * 120) + 15 : 0

    const scheduledDeparture = new Date(now.getTime() + (Math.random() - 0.5) * 8 * 60 * 60 * 1000)
    const actualDeparture =
      status === "departed" || status === "arrived"
        ? new Date(scheduledDeparture.getTime() + delayMinutes * 60 * 1000)
        : null

    const scheduledArrival = new Date(scheduledDeparture.getTime() + (2 + Math.random() * 4) * 60 * 60 * 1000)
    const actualArrival = status === "arrived" ? new Date(scheduledArrival.getTime() + delayMinutes * 60 * 1000) : null

    flights.push({
      id: `FL${i + 1}`,
      flightNumber: `${airline}${flightNum}`,
      origin,
      destination,
      status,
      scheduledDeparture,
      actualDeparture,
      scheduledArrival,
      actualArrival,
      aircraft: aircraft[Math.floor(Math.random() * aircraft.length)],
      gate: `${String.fromCharCode(65 + Math.floor(Math.random() * 5))}${Math.floor(Math.random() * 30) + 1}`,
      delayMinutes,
    })
  }

  return flights.sort((a, b) => a.scheduledDeparture.getTime() - b.scheduledDeparture.getTime())
}

// Generate SLA metrics
export function generateSLAMetrics(): SLAMetric[] {
  return [
    {
      id: "sla1",
      metric: "On-Time Departure",
      target: 85,
      actual: 82.3,
      status: "warning",
      trend: "down",
    },
    {
      id: "sla2",
      metric: "On-Time Arrival",
      target: 80,
      actual: 78.5,
      status: "warning",
      trend: "down",
    },
    {
      id: "sla3",
      metric: "Baggage Handling",
      target: 95,
      actual: 96.8,
      status: "good",
      trend: "up",
    },
    {
      id: "sla4",
      metric: "Gate Turnaround",
      target: 30,
      actual: 28.5,
      status: "good",
      trend: "stable",
    },
    {
      id: "sla5",
      metric: "Customer Satisfaction",
      target: 90,
      actual: 88.2,
      status: "warning",
      trend: "stable",
    },
    {
      id: "sla6",
      metric: "Data Pipeline Uptime",
      target: 99.9,
      actual: 99.95,
      status: "good",
      trend: "up",
    },
  ]
}

// Generate ETL jobs
export function generateETLJobs(): ETLJob[] {
  const now = new Date()
  return [
    {
      id: "etl1",
      name: "Flight Status Sync",
      status: "completed",
      lastRun: new Date(now.getTime() - 5 * 60 * 1000),
      duration: 45,
      recordsProcessed: 1250,
    },
    {
      id: "etl2",
      name: "Passenger Data ETL",
      status: "running",
      lastRun: new Date(now.getTime() - 2 * 60 * 1000),
      duration: 120,
      recordsProcessed: 8500,
    },
    {
      id: "etl3",
      name: "Baggage Tracking",
      status: "completed",
      lastRun: new Date(now.getTime() - 10 * 60 * 1000),
      duration: 30,
      recordsProcessed: 3200,
    },
    {
      id: "etl4",
      name: "Weather Data Import",
      status: "completed",
      lastRun: new Date(now.getTime() - 15 * 60 * 1000),
      duration: 15,
      recordsProcessed: 450,
    },
    {
      id: "etl5",
      name: "Crew Scheduling",
      status: "failed",
      lastRun: new Date(now.getTime() - 20 * 60 * 1000),
      duration: 60,
      recordsProcessed: 0,
    },
  ]
}

// Generate performance metrics for charts
export function generatePerformanceMetrics(): PerformanceMetric[] {
  const metrics: PerformanceMetric[] = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    metrics.push({
      timestamp,
      onTimePerformance: 75 + Math.random() * 15,
      avgDelay: 10 + Math.random() * 20,
      flightsProcessed: Math.floor(80 + Math.random() * 40),
    })
  }

  return metrics
}
