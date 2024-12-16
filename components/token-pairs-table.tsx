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

interface TokenPairsTableProps {
  pairs: TokenPair[];
}

export function TokenPairsTable({ pairs }: TokenPairsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pair</TableHead>
          <TableHead className="text-right">TVL</TableHead>
          <TableHead className="text-right">Volume (24h)</TableHead>
          <TableHead className="text-right">Fees (24h)</TableHead>
          <TableHead className="text-right">APY</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pairs.map((pair) => (
          <TableRow key={pair.id}>
            <TableCell>
              <Link
                href={`/dashboard/pair/${pair.id}`}
                className="text-primary hover:underline"
              >
                {pair.token0.symbol}/{pair.token1.symbol}
              </Link>
            </TableCell>
            <TableCell className="text-right">{pair.tvl}</TableCell>
            <TableCell className="text-right">{pair.volume24h}</TableCell>
            <TableCell className="text-right">{pair.fees24h}</TableCell>
            <TableCell className="text-right">{pair.apy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}