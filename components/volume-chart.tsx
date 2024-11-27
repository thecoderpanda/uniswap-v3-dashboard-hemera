"use client";

import { Card } from "@/components/ui/card";
import { TokenPair } from "@/lib/types";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/lib/utils";

interface VolumeChartProps {
  pairs: TokenPair[];
}

export function VolumeChart({ pairs }: VolumeChartProps) {
  const data = pairs.map((pair) => ({
    name: `${pair.token0.symbol}/${pair.token1.symbol}`,
    volume: pair.volume24h,
  }));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">24h Volume by Pair</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1e6}M`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">{payload[0].payload.name}</div>
                        <div className="font-medium text-right">
                          {formatCurrency(payload[0].value as number)}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="volume"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.2}
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}