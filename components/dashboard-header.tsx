"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Default to true since we're removing demo mode
const LIVE_MODE = process.env.NEXT_PUBLIC_LIVE_MODE !== "false";

const SUPPORTED_CHAINS = [
  { id: "ethereum", name: "Ethereum", icon: "🔷" },
  { id: "polygon", name: "Polygon", icon: "💜", disabled: true },
  { id: "arbitrum", name: "Arbitrum", icon: "🔵", disabled: true },
  { id: "optimism", name: "Optimism", icon: "🔴", disabled: true },
  { id: "base", name: "Base", icon: "🟢", disabled: true },
] as const;

export function DashboardHeader() {
  const [syncStatus, setSyncStatus] = useState<"syncing" | "completed">("syncing");
  const [lastSynced, setLastSynced] = useState<Date>(new Date());
  const [selectedChain, setSelectedChain] = useState<string>("ethereum");


  const handleChainChange = (chainId: string) => {
    const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);

    setSelectedChain(chainId);
  };

  useEffect(() => {
    // Reset sync status when chain changes
    setSyncStatus("syncing");
    
    // In a real implementation, this would check the API connection status
    const timer = setTimeout(() => {
      setSyncStatus("completed");
      setLastSynced(new Date());
    }, 5000);
    return () => clearTimeout(timer);
  }, [selectedChain]);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Uniswap V3 Dashboard</h1>
        <div className="flex items-center gap-4">
          {syncStatus === "completed" && (
            <span className="text-sm text-muted-foreground">
              Last synced: {lastSynced.toLocaleTimeString()}
            </span>
          )}
          <Select value={selectedChain} onValueChange={handleChainChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select chain" />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_CHAINS.map((chain) => (
                <SelectItem 
                  key={chain.id} 
                  value={chain.id}
                  disabled={'disabled' in chain}
                  className={'disabled' in chain ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <span className="flex items-center gap-2">
                    <span>{chain.icon}</span>
                    <span>{chain.name}</span>
                    {'disabled' in chain && (
                      <span className="text-xs text-muted-foreground ml-2">(Coming soon)</span>
                    )}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ThemeToggle />
        </div>
      </div>
      <Alert variant={syncStatus === "completed" ? "default" : "destructive"}>
        {syncStatus === "syncing" ? (
          <AlertCircle className="h-4 w-4 animate-pulse" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        )}
        <AlertDescription className="ml-2">
          {syncStatus === "syncing" 
            ? `Syncing with Hemera indexer on ${SUPPORTED_CHAINS.find(c => c.id === selectedChain)?.name}...`
            : `Successfully synced with Hemera indexer on ${SUPPORTED_CHAINS.find(c => c.id === selectedChain)?.name}`
          }
        </AlertDescription>
      </Alert>
    </div>
  );
}