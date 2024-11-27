export interface TokenPair {
  id: string;
  token0: {
    symbol: string;
    address: string;
  };
  token1: {
    symbol: string;
    address: string;
  };
  tvl: number;
  volume24h: number;
  fees24h: number;
  apy: number;
}

export interface DashboardStats {
  totalLiquidity: number;
  totalVolume24h: number;
  totalFees24h: number;
  averageApy: number;
  activePairs: number;
}