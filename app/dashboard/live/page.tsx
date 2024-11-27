"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard-header";
import { MetricsOverview } from "@/components/metrics-overview";
import { TokenPairsTable } from "@/components/token-pairs-table";
import { VolumeChart } from "@/components/charts/volume-chart";
import { TvlDistribution } from "@/components/charts/tvl-distribution";
import { demoDashboardStats, demoTokenPairs } from "@/lib/demo-data";

// Default to false if not set
const LIVE_MODE = process.env.NEXT_PUBLIC_LIVE_MODE === "true";

export default function LiveDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to demo dashboard if not in live mode
    if (!LIVE_MODE) {
      router.replace("/dashboard/demo");
    }
  }, [router]);

  // If not in live mode, don't render anything while redirecting
  if (!LIVE_MODE) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
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