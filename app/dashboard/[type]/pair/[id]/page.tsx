import { demoTokenPairs } from "@/lib/demo-data";
import { ClientPairPage } from "@/components/client-pair-page";

export function generateStaticParams() {
  return demoTokenPairs.flatMap((pair) => [
    { type: "demo", id: pair.id },
    { type: "live", id: pair.id },
  ]);
}

export default function PairPage({
  params,
}: {
  params: { type: string; id: string };
}) {
  const pair = demoTokenPairs.find((p) => p.id === params.id);
  
  if (!pair) {
    return <div>Pair not found</div>;
  }

  return <ClientPairPage pair={pair} />;
}