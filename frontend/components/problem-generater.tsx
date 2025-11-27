"use client"

import LlmClient from "@/components/llm-client";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner"
import { Problem } from "@/app/utils/types";
const ProblemGenerator = () => {
    const [problem, setProblem] = useState<Problem | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="w-[80%] flex flex-col justify-end">
            {isLoading ? <Spinner className="size-lg" /> : problem?.description}
            <LlmClient updateProblem={setProblem} updateLoading={setIsLoading} />
        </div>
    );
}

export default ProblemGenerator