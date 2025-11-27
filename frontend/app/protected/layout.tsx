import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar";

export default function ProtectedLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        < main className="min-h-screen w-full flex flex-col" >
          <div className="flex flex-col">
            {/* <SidebarTrigger /> */}
            {children}
          </div>
        </main >
      </SidebarProvider>
    </div>
  );
}