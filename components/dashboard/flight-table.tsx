"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { Flight } from "@/lib/simulated-data"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

interface FlightTableProps {
  flights: Flight[]
}

export function FlightTable({ flights }: FlightTableProps) {
  const statusColors = {
    "on-time": "bg-success/20 text-success border-success/30",
    delayed: "bg-warning/20 text-warning border-warning/30",
    departed: "bg-info/20 text-info border-info/30",
    arrived: "bg-muted/50 text-muted-foreground border-muted",
    cancelled: "bg-destructive/20 text-destructive border-destructive/30",
  }

  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground">Flight</TableHead>
            <TableHead className="text-muted-foreground">Route</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-muted-foreground">Departure</TableHead>
            <TableHead className="text-muted-foreground">Arrival</TableHead>
            <TableHead className="text-muted-foreground">Aircraft</TableHead>
            <TableHead className="text-muted-foreground">Gate</TableHead>
            <TableHead className="text-muted-foreground text-right">Delay</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flights.slice(0, 15).map((flight) => (
            <TableRow key={flight.id} className="border-border">
              <TableCell className="font-mono font-semibold">{flight.flightNumber}</TableCell>
              <TableCell>
                <span className="font-medium">{flight.origin}</span>
                <span className="mx-2 text-muted-foreground">→</span>
                <span className="font-medium">{flight.destination}</span>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("capitalize", statusColors[flight.status])}>
                  {flight.status}
                </Badge>
              </TableCell>
              <TableCell className="text-sm">
                <div>{format(flight.scheduledDeparture, "HH:mm")}</div>
                {flight.actualDeparture && (
                  <div className="text-xs text-muted-foreground">{format(flight.actualDeparture, "HH:mm")}</div>
                )}
              </TableCell>
              <TableCell className="text-sm">
                <div>{format(flight.scheduledArrival, "HH:mm")}</div>
                {flight.actualArrival && (
                  <div className="text-xs text-muted-foreground">{format(flight.actualArrival, "HH:mm")}</div>
                )}
              </TableCell>
              <TableCell className="font-mono text-sm">{flight.aircraft}</TableCell>
              <TableCell className="font-mono text-sm">{flight.gate}</TableCell>
              <TableCell className="text-right">
                {flight.delayMinutes > 0 ? (
                  <span className="font-semibold text-warning">{flight.delayMinutes}m</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
