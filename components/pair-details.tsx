"use client";

import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card } from "@/components/ui/card";
import { demoTokenPairs } from "@/lib/demo-data";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { VolumeChart } from "@/components/charts/volume-chart";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PairDetailsProps {
  type: string;
  id: string;
}

export function PairDetails({ type, id }: PairDetailsProps) {
  const pair = demoTokenPairs.find((p) => p.id === id);

  if (!pair) {
    return <div>Pair not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <Breadcrumbs />
        <div className="flex items-center justify-between">
          <Link href={`/dashboard/${type}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <DashboardHeader isDemo={type === "demo"} />

      <div className="space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              {pair.token0.symbol}/{pair.token1.symbol}
            </h2>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://app.uniswap.org/#/pool/${pair.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Uniswap
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="ml-2">
              Detailed analytics for the {pair.token0.symbol}/{pair.token1.symbol} pool
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">TVL</h3>
            <div className="mt-2">
              <p className="text-2xl font-semibold">{formatCurrency(pair.tvl)}</p>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">24h Volume</h3>
            <div className="mt-2">
              <p className="text-2xl font-semibold">{formatCurrency(pair.volume24h)}</p>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">24h Fees</h3>
            <div className="mt-2">
              <p className="text-2xl font-semibold">{formatCurrency(pair.fees24h)}</p>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">APY</h3>
            <div className="mt-2">
              <p className="text-2xl font-semibold">{formatNumber(pair.apy)}%</p>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="positions">Positions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Pool Information</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pool Address</dt>
                    <dd className="font-mono">{pair.token0.address.slice(0, 6)}...{pair.token0.address.slice(-4)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Fee Tier</dt>
                    <dd>0.3%</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Token 0</dt>
                    <dd>{pair.token0.symbol}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Token 1</dt>
                    <dd>{pair.token1.symbol}</dd>
                  </div>
                </dl>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Price Information</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Current Price</dt>
                    <dd>$1,234.56</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Price Change (24h)</dt>
                    <dd className="text-green-500">+2.34%</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Low (24h)</dt>
                    <dd>$1,200.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">High (24h)</dt>
                    <dd>$1,300.00</dd>
                  </div>
                </dl>
              </Card>
            </div>
            <VolumeChart pairs={[pair]} />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </Card>
          </TabsContent>
          <TabsContent value="positions" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Liquidity Positions</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}