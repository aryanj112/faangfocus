import StartButton from "@/components/start-button";
import CompanyCarousel from "./company-carousel";

export function Hero() {
  return (
    <div className="flex flex-col gap-[3rem] items-center">
      <div className="flex gap-8 justify-center items-center">
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Welcome to FAANG Focus
      </p>
      <p className="text-center text-xl">
        FAANG Focus delivers AI-generated, company-specific interview prep that helps you practice exactly what top tech companies test for.
        Train on realistic coding questions, improve faster, and stay laser-focused on your goals.
      </p>
      <StartButton />
      <CompanyCarousel />
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
