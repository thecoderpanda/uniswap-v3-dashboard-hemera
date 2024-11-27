"use client";

import { TokenPair } from "@/lib/types";
import { Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts";
import { BaseChart } from "./base-chart";
import { ChartTooltip } from "./chart-tooltip";

interface VolumeChartProps {
  pairs: TokenPair[];
}

export function VolumeChart({ pairs }: VolumeChartProps) {
  const data = pairs.map((pair) => ({
    name: `${pair.token0.symbol}/${pair.token1.symbol}`,
    volume: pair.volume24h,
  }));

  return (
    <BaseChart title="24h Volume by Pair">
      <AreaChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickMargin={12}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value / 1e6}M`}
          tickMargin={12}
        />
        <Tooltip content={(props) => <ChartTooltip {...props} dataKey="volume" />} />
        <Area
          type="monotone"
          dataKey="volume"
          fill="hsl(var(--chart-1))"
          fillOpacity={0.2}
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
        />
      </AreaChart>
    </BaseChart>
  );
}