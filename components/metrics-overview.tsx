import { Card } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { DashboardStats } from "@/lib/types";

interface MetricsOverviewProps {
  stats: DashboardStats;
}

export function MetricsOverview({ stats }: MetricsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Total Liquidity</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{formatCurrency(stats.totalLiquidity)}</p>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">24h Volume</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{formatCurrency(stats.totalVolume24h)}</p>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">24h Fees</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{formatCurrency(stats.totalFees24h)}</p>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">Average APY</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold">{formatNumber(stats.averageApy)}%</p>
        </div>
      </Card>
    </div>
  );
}