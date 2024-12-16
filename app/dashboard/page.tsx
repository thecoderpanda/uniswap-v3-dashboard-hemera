"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard-header";
import { MetricsOverview } from "@/components/metrics-overview";
import { TokenPairsTable } from "@/components/token-pairs-table";
import { VolumeChart } from "@/components/charts/volume-chart";
import { TvlDistribution } from "@/components/charts/tvl-distribution";
import { demoDashboardStats, demoTokenPairs } from "@/lib/demo-data";
import { config } from "@/lib/config";
import { DashboardStats, TokenPair } from "@/lib/types";

// Error placeholder data
const ERROR_STATS: DashboardStats = {
  totalLiquidity: 0,
  totalVolume24h: 0,
  totalFees24h: 0,
  averageApy: 0,
  activePairs: 0,
};

const ERROR_PAIRS: TokenPair[] = demoTokenPairs.map(pair => ({
  ...pair,
  tvl: 0,
  volume24h: 0,
  fees24h: 0,
  apy: 0,
}));

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  // Use error data if not in production
  const stats = config.isProduction ? demoDashboardStats : ERROR_STATS;
  const pairs = config.isProduction ? demoTokenPairs : ERROR_PAIRS;

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <div className="space-y-8">
        <MetricsOverview stats={stats} />
        
        <div className="grid md:grid-cols-2 gap-8">
          <VolumeChart pairs={pairs} />
          <TvlDistribution pairs={pairs} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Top Pools</h2>
          <TokenPairsTable pairs={pairs} />
        </div>
      </div>
    </div>
  );
} 