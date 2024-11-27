"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { MetricsOverview } from "@/components/metrics-overview";
import { TokenPairsTable } from "@/components/token-pairs-table";
import { VolumeChart } from "@/components/charts/volume-chart";
import { TvlDistribution } from "@/components/charts/tvl-distribution";
import { demoDashboardStats, demoTokenPairs } from "@/lib/demo-data";

export default function DemoDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader isDemo />
      <div className="space-y-8">
        <MetricsOverview stats={demoDashboardStats} />
        
        <div className="grid md:grid-cols-2 gap-8">
          <VolumeChart pairs={demoTokenPairs} />
          <TvlDistribution pairs={demoTokenPairs} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Top Pools</h2>
          <TokenPairsTable pairs={demoTokenPairs} />
        </div>
      </div>
    </div>
  );
}