"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, LogOut } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { config } from "@/lib/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SUPPORTED_CHAINS = [
  { id: "ethereum", name: "Ethereum", icon: "🔷" },
  { id: "polygon", name: "Polygon", icon: "💜", disabled: true },
  { id: "arbitrum", name: "Arbitrum", icon: "🔵", disabled: true },
  { id: "optimism", name: "Optimism", icon: "🔴", disabled: true },
  { id: "base", name: "Base", icon: "🟢", disabled: true },
] as const;

export function DashboardHeader() {
  const router = useRouter();
  const { toast } = useToast();
  const [syncStatus, setSyncStatus] = useState<"syncing" | "completed" | "error">("syncing");
  const [lastSynced, setLastSynced] = useState<Date | null>(null);
  const [selectedChain, setSelectedChain] = useState<string>("ethereum");

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  const handleChainChange = (chainId: string) => {
    const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);
    setSelectedChain(chainId);
  };

  const showErrorPopup = () => {
    toast({
      variant: "destructive",
      title: "Something went wrong!",
      description: (
        <div className="mt-2 flex flex-col gap-1.5">
          <p>Unable to connect to Hemera Indexer.</p>
          <p className="text-sm opacity-90">Please check the following:</p>
          <ul className="list-disc list-inside text-sm opacity-90">
            <li>Indexer service status</li>
            <li>Your network connection</li>
            <li>Try again in a few minutes</li>
          </ul>
        </div>
      ),
      duration: 0, // Keep it visible until user dismisses
    });
  };

  useEffect(() => {
    // Reset sync status when chain changes
    setSyncStatus("syncing");
    
    // Check environment and simulate API call
    const checkIndexerStatus = async () => {
      if (!config.isProduction) {
        setSyncStatus("error");
        setLastSynced(null);
        showErrorPopup();
        return;
      }

      try {
        // In production, simulate API check
        await new Promise(resolve => setTimeout(resolve, 5000));
        setSyncStatus("completed");
        setLastSynced(new Date());
      } catch (error) {
        setSyncStatus("error");
        setLastSynced(null);
        showErrorPopup();
      }
    };

    checkIndexerStatus();
  }, [selectedChain, toast]);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Uniswap V3 Dashboard</h1>
        <div className="flex items-center gap-4">
          {syncStatus === "completed" && lastSynced && (
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
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20"
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
      <Alert 
        variant={
          syncStatus === "completed" 
            ? "default" 
            : syncStatus === "error" 
              ? "destructive" 
              : "default"
        }
      >
        {syncStatus === "syncing" ? (
          <AlertCircle className="h-4 w-4 animate-pulse" />
        ) : syncStatus === "error" ? (
          <AlertCircle className="h-4 w-4" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        )}
        <AlertDescription className="ml-2">
          {syncStatus === "syncing" 
            ? `Syncing with Hemera indexer on ${SUPPORTED_CHAINS.find(c => c.id === selectedChain)?.name}...`
            : syncStatus === "error"
            ? "Unable to fetch data from Hemera Indexer. Please check indexer status."
            : `Successfully synced with Hemera indexer on ${SUPPORTED_CHAINS.find(c => c.id === selectedChain)?.name}`
          }
        </AlertDescription>
      </Alert>
    </div>
  );
}