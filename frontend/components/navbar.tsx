import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";
import { ThemeSwitcher } from "./theme-switcher";
const Navbar = () => {
  return (
    <nav className="p-[1rem] h-[4rem] w-full flex items-center justify-end px-10 border-b border-b-foreground/10">
      {/* <div className="w-full max-w-5xl flex justify-end items-center p-3 px-5 text-sm"> */}
      {/* <div className="flex gap-5 items-center font-semibold">
              <div className="flex items-center gap-2">
                <DeployButton />
              </div>
            </div> */}
      {/* {!hasEnvVars ? (
              <EnvVarWarning />
            ) : ( */}
      {/* <ThemeSwitcher /> */}
      <Suspense>
        <AuthButton />
      </Suspense>
      {/* )} */}
      {/* </div> */}
    </nav>
  );
}

export default Navbar