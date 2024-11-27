import { demoTokenPairs } from "@/lib/demo-data";
import { PairDetails } from "@/components/pair-details";

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
  return <PairDetails type={params.type} id={params.id} />;
}