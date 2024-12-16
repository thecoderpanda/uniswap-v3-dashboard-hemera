"use client";

import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { TokenPair } from "@/lib/types";

interface PairDetailsProps {
  pair: TokenPair;
}

export function PairDetails({ pair }: PairDetailsProps) {
  if (!pair) return null;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          {pair.token0.symbol}/{pair.token1.symbol}
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">TVL</h3>
          <p className="mt-2 text-3xl font-bold">{pair.tvl}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">24h Volume</h3>
          <p className="mt-2 text-3xl font-bold">{pair.volume24h}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">24h Fees</h3>
          <p className="mt-2 text-3xl font-bold">{pair.fees24h}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">APY</h3>
          <p className="mt-2 text-3xl font-bold">{pair.apy}</p>
        </Card>
      </div>
    </div>
  );
}