'use client'

import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CodeEditor from "@/components/code-editor";
import CodeOutput from "@/components/code-output";

export default function CodePage() {
  return (
    <div className="flex w-full h-screen gap-[1rem] p-[1rem]">
      <div className='w-1/2 h-full'>
        <CodeEditor />
      </div>
      <div className='w-1/2 h-full'>
        <CodeOutput />
      </div>
    </div>
  );
}
