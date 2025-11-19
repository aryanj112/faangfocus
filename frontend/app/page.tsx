// "use client"

import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const { data, error } = await supabase.auth.getSession()

  const handleSubmit = async () => {
    // const supabase = createClient();
    // const { data, error } = await (await supabase).auth.getSession()
    // const { session } = data
    // const router = useRouter();
    // if (error) throw error;
    // if (session) {
    //   router.push("/protected");
    // }
  }

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


            {/* <Button onClick={handleSubmit}>
              Start Coding
            </Button> */}

          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          {/* <main className="flex-1 flex flex-col gap-6 px-4">
            <h2 className="font-medium text-xl mb-4">Next butt steps</h2>
            {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
          </main> */}
          <footer className="w-full flex flex-col items-center justify-center border-t mx-auto text-center gap-[2rem] py-[2rem]">
            <p className="text-lg">
              Hey everyone! I'm Aryan and I made Faang Focus to make the interview process a better place.
              Feel free to connect with me and reach out with any suggestions or bugs :)
            </p>
            <div className="flex flex-row gap-[1rem]">
              <a
                href="https://www.linkedin.com/in/aryanjain06/"
                target="_blank"
                className="hover:scale-110 transition duration-550 ease-in-out"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-[3.5rem] h-[3.5rem]" />
              </a>
              <a
                href="mailto:2006aryanj@gmail.com"
                target="_blank"
                className="hover:scale-110 transition duration-550 ease-in-out"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-[3.5rem] h-[3.5rem]" />
              </a>
              <a
                href="https://www.instagram.com/aryan_jain_n/"
                target="_blank"
                className="hover:scale-110 transition duration-550 ease-in-out"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-[3.5rem] h-[3.5rem]" />
              </a>
            </div>
          </footer>
        </div>
      </div >
    </main >
  );
}
