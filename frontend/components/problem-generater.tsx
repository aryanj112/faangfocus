"use client"

import LlmClient from "@/components/llm-client";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner"
import { Problem } from "@/app/utils/types";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { TextGenerateEffect } from "@/components/ui/shadcn-io/text-generate-effect";

const ProblemGenerator = () => {
    const [problem, setProblem] = useState<Problem | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const Recommendations = () => {
        const typerText = [
            "I'm interviewing at Pinterest — give me a graph problem like Accounts Merge",
            "Generate a Google - style dynamic programming question for me to practice",
            "I need a Meta interview problem involving trees and DFS",
            "Give me a tough Uber array / greedy problem similar to their phone screen questions",
            "Make a Netflix - style sliding window problem with an examples table",
            "I'm preparing for Stripe — give me a hashing + ordering problem",
            "Help me practice a two - pointer problem that mimics common Airbnb interviews",
            "I want a hard graph question like the ones asked in Microsoft onsite round",
            "Give me a binary search question tailored to Robinhood interview patterns",
        ]
        if (!problem && !isLoading) {
            return (
                < TypingText
                    text={typerText}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-xl font-bold"
                    textColors={['#3B82F6', '#FF47A3', '#06B6D4']}
                    variableSpeed={{ min: 50, max: 120 }}
                />
            );
        }
    }

    const ProblemGenerating = () => {
        if (!problem && isLoading) {
            return (
                <div className="flex flex-col gap-[2rem] items-center" >
                    <p className="text-3xl font-bold">
                        Your Problem Is Being Generated...
                    </p>
                    <Spinner className="size-[2rem]" />
                </div>
            );

        }
    }

    const ProblemDesc = () => {
        if (problem) {
            return (
                <TextGenerateEffect
                    words={problem.description}
                    duration={0.6}
                    staggerDelay={0.15}
                    filter={true}
                />
            );
        }
    }

    return (
        <div className="w-[80%] flex flex-col justify-end items-center">
            <ProblemDesc />
            <Recommendations />
            <ProblemGenerating />
            <LlmClient updateProblem={setProblem} updateLoading={setIsLoading} />
        </div>
    );
}

export default ProblemGenerator