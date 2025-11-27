import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";
import ProblemGenerator from "@/components/problem-generater"
// import { DeployButton } from "@/components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
// import { ThemeSwitcher } from "@/components/theme-switcher";
// import Link from "next/link";
// import Footer from "@/components/footer";

export default function ProtectedLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <div className="flex flex-col">
        <nav className="w-full flex justify-end px-[2.5rem] border-b border-b-foreground/10 h-16">
          {/* <div className="w-full max-w-5xl flex justify-end items-center p-3 px-5 text-sm"> */}
          {/* <div className="flex gap-5 items-center font-semibold">
              <div className="flex items-center gap-2">
                <DeployButton />
              </div>
            </div> */}
          {/* {!hasEnvVars ? (
              <EnvVarWarning />
            ) : ( */}
          <Suspense>
            <AuthButton />
          </Suspense>
          {/* )} */}
          {/* </div> */}
        </nav>
        {children}
      </div>
    </main>
  );
}