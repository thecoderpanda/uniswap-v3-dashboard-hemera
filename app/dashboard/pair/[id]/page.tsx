import { demoTokenPairs } from "@/lib/demo-data";
import { ClientPairPage } from "@/components/client-pair-page";

interface PairPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all possible pair IDs
export async function generateStaticParams() {
  // Return all possible pair IDs from the demo data
  return demoTokenPairs.map((pair) => ({
    id: pair.id,
  }));
}

export default function PairPage({ params }: PairPageProps) {
  const { id } = params;
  const pair = demoTokenPairs.find((p) => p.id === id);

  if (!pair) {
    return <div>Pair not found</div>;
  }

  return <ClientPairPage pair={pair} />;
} 