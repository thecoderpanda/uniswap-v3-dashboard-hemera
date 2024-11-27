"use client";

import { formatCurrency } from "@/lib/utils";

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  dataKey?: string;
}

export function ChartTooltip({ active, payload, dataKey = "value" }: ChartTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="font-medium">{payload[0].payload.name}</div>
          <div className="font-medium text-right">
            {formatCurrency(payload[0].value)}
          </div>
        </div>
      </div>
    );
  }
  return null;
}