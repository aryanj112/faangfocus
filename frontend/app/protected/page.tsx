import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LlmClient from "@/components/llm-client";


// import { InfoIcon } from "lucide-react";
// import { FetchDataSteps } from "@/components/tutorial/fetch-data-steps";
// import { Suspense } from "react";
// async function UserDetails() {
//   const supabase = await createClient();
//   const { data, error } = await supabase.auth.getClaims();
//   if (error || !data?.claims) {
//     redirect("/auth/login");
//   }
//   return JSON.stringify(data.claims, null, 2);
// }


import ProblemGenerator from "@/components/problem-generater";

export default function ProtectedPage() {
  return (
    <div className="flex">
      <div className="w-[25rem]">

      </div>


      <div className="flex flex-col w-[80%] min-h-screen items-center justify-end">
        <ProblemGenerator />

      </div>
    </div>

  );
}
