import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar";

export default function CodeLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}