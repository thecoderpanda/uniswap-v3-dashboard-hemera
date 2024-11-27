"use client";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TokenPair } from "@/lib/types";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { useParams } from "next/navigation";

interface TokenPairsTableProps {
  pairs: TokenPair[];
}

export function TokenPairsTable({ pairs }: TokenPairsTableProps) {
  const params = useParams();
  const type = params.type || "demo";

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pair</TableHead>
            <TableHead className="text-right">TVL</TableHead>
            <TableHead className="text-right">24h Volume</TableHead>
            <TableHead className="text-right">24h Fees</TableHead>
            <TableHead className="text-right">APY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pairs.map((pair) => (
            <TableRow key={pair.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link href={`/dashboard/${type}/pair/${pair.id}`} className="text-primary hover:underline">
                  {pair.token0.symbol}/{pair.token1.symbol}
                </Link>
              </TableCell>
              <TableCell className="text-right">{formatCurrency(pair.tvl)}</TableCell>
              <TableCell className="text-right">{formatCurrency(pair.volume24h)}</TableCell>
              <TableCell className="text-right">{formatCurrency(pair.fees24h)}</TableCell>
              <TableCell className="text-right">{formatNumber(pair.apy)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}