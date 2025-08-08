import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/AppSidebar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex  items-center overflow-hidden justify-center  w-full min-h-screen  ">
      <div className="text-center flex items-center  justify-center flex-col ">
        <h1 className="text-6xl font-bold ">404</h1>
        <h2 className="text-2xl font-semibold ">Page Not Found</h2>
        <p className="text-gray-600 ">
          The page you are looking for doesnt exist.
        </p>
        <Link
          href="/guide"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Go to Components Guide
        </Link>
      </div>
    </div>
  );
}
