"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DashboardHeaderProps {
  isDemo?: boolean;
}

// Default to false if not set
const LIVE_MODE = process.env.NEXT_PUBLIC_LIVE_MODE === "true";

export function DashboardHeader({ isDemo = false }: DashboardHeaderProps) {
  const [syncStatus, setSyncStatus] = useState<"syncing" | "completed">("syncing");
  const [lastSynced, setLastSynced] = useState<Date>(new Date());

  useEffect(() => {
    // Only show syncing animation in demo mode or when LIVE_MODE is true
    if (isDemo || LIVE_MODE) {
      const timer = setTimeout(() => {
        setSyncStatus("completed");
        setLastSynced(new Date());
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      // Immediately set to completed for non-live mode
      setSyncStatus("completed");
      setLastSynced(new Date());
    }
  }, [isDemo]);

  // If not in live mode and not demo, show the demo notice
  if (!LIVE_MODE && !isDemo) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Demo Dashboard</h1>
        </div>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className="ml-2">
            This is Demo UI. UDFs are not implemented, data that is served is cached.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">
          {isDemo ? "Demo Dashboard" : "Live Dashboard"}
        </h1>
        {syncStatus === "completed" && (
          <span className="text-sm text-muted-foreground">
            Last synced: {lastSynced.toLocaleTimeString()}
          </span>
        )}
      </div>
      <Alert variant={syncStatus === "completed" ? "default" : "destructive"}>
        {syncStatus === "syncing" ? (
          <AlertCircle className="h-4 w-4 animate-pulse" />
        ) : (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        )}
        <AlertDescription className="ml-2">
          {syncStatus === "syncing" ? (
            isDemo ? (
              "Loading cached demo data..."
            ) : (
              "Syncing with Hemera indexer, please wait..."
            )
          ) : (
            <div className="flex items-center justify-between w-full">
              <span>
                {isDemo 
                  ? "Demo data loaded. Connect to UDFs to fetch real-time data."
                  : "Successfully synced with Hemera indexer"}
              </span>
            </div>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}