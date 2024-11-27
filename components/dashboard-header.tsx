"use client";

import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DashboardHeaderProps {
  isDemo?: boolean;
}

export function DashboardHeader({ isDemo = false }: DashboardHeaderProps) {
  const [syncStatus, setSyncStatus] = useState<"syncing" | "completed">("syncing");
  const [lastSynced, setLastSynced] = useState<Date>(new Date());

  useEffect(() => {
    if (isDemo) {
      const timer = setTimeout(() => {
        setSyncStatus("completed");
        setLastSynced(new Date());
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isDemo]);

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
          {syncStatus === "syncing"
            ? "Syncing with Hemera indexer, please wait..."
            : "Successfully synced with Hemera indexer"}
        </AlertDescription>
      </Alert>
    </div>
  );
}