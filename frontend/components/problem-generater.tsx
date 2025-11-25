"use client"

import LlmClient from "@/components/llm-client";
import { useState } from "react";

const ProblemGenerator = () => {
    const [problem, setProblem] = useState<[string, any][]>([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>

            {/* <p>{problem}</p> */}
            <LlmClient updateProblem={setProblem} updateLoading={setIsLoading} />
        </div>
    )
}

export default ProblemGenerator