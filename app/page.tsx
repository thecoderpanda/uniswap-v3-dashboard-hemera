import Link from 'next/link';
import { ArrowRight, Activity, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-4">
            Uniswap V3 Analytics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by Hemera Protocol - Real-time insights and analytics for Uniswap V3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Live Dashboard</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Access real-time Uniswap V3 metrics with live data from the blockchain.
              </p>
              <Link href="/dashboard/live" className="block">
                <Button className="w-full">
                  Launch Live Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-semibold">Demo Dashboard</h2>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Explore the dashboard features with demo data and simulated updates.
              </p>
              <Link href="/dashboard/demo" className="block">
                <Button variant="outline" className="w-full">
                  View Demo Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}