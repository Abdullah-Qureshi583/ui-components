'use client';

import { useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/AppSidebar";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger />
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-8">
              {error?.message || 'An unexpected error occurred.'}
            </p>
            <div className="flex gap-4">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Try Again
              </button>
              <Link 
                href="/guide" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Go to Guide
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}