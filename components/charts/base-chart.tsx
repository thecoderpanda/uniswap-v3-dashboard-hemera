"use client";

import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer } from "recharts";

interface BaseChartProps {
  title: string;
  children: React.ReactElement;
}

export function BaseChart({ title, children }: BaseChartProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}