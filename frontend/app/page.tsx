import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Suspense } from "react";
import Footer from "@/components/footer";

import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
// import { DeployButton } from "@/components/deploy-button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            {/* <div className="flex gap-5 items-center font-semibold"> */}
            {/* <div className="flex items-center gap-2">
                <DeployButton />
              </div> */}
            {/* </div> */}
            {/* {!hasEnvVars ? (
              <EnvVarWarning />
            ) : ( */}
            <ThemeSwitcher />
            <Suspense>
              <AuthButton />
            </Suspense>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          <Footer />
        </div>
      </div >
    </main >
  );
}
