"use client";

import { TokenPair } from "@/lib/types";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { BaseChart } from "./base-chart";
import { ChartTooltip } from "./chart-tooltip";

interface TvlDistributionProps {
  pairs: TokenPair[];
}

export function TvlDistribution({ pairs }: TvlDistributionProps) {
  const data = pairs.map((pair) => ({
    name: `${pair.token0.symbol}/${pair.token1.symbol}`,
    value: pair.tvl,
  }));

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ];

  return (
    <BaseChart title="TVL Distribution">
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={ChartTooltip} />
      </PieChart>
    </BaseChart>
  );
}