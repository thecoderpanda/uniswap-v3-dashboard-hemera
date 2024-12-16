"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PairDetails } from "@/components/pair-details";
import { TokenPair } from "@/lib/types";

interface ClientPairPageProps {
  pair: TokenPair;
}

export function ClientPairPage({ pair }: ClientPairPageProps) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <PairDetails pair={pair} />
    </div>
  );
} 