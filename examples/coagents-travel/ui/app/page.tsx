"use client";

import { MapCanvas } from "@/components/MapCanvas";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TripsProvider } from "@/lib/hooks/use-trips";

export default function Home() {
  return (
    <TooltipProvider>
      <TripsProvider>
        <main className="h-screen w-screen">
          <MapCanvas />
        </main>
      </TripsProvider>
    </TooltipProvider>
  );
}
