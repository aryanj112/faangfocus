"use client"

import LlmClient from "@/components/llm-client";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner"
import { Problem } from "@/app/utils/types";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { TextGenerateEffect } from "@/components/ui/shadcn-io/text-generate-effect";
import { ShimmeringText } from "@/components/ui/shadcn-io/shimmering-text";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ExploreProblem from "./explore-problem";


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
                    className="text-2xl font-bold"
                    textColors={['#3B82F6', '#FF47A3', '#06B6D4']}
                    variableSpeed={{ min: 50, max: 120 }}
                />
            );
        }
    }

    const ProblemGenerating = () => {
        if (!problem && isLoading) {
            return (
                <div className="flex flex-col gap-[3rem] items-center" >
                    <ShimmeringText
                        text="Your Problem Is Being Generated . . . "
                        duration={2}
                        wave={true}
                        className="text-3xl font-bold"
                        shimmeringColor="hsl(var(--primary))"
                    />
                    <Spinner className="size-[2rem]" />
                </div>
            );

        }
    }

    const ProblemDesc = () => {
        if (problem) {
            return (
                <>
                    <TextGenerateEffect
                        words={problem.title}
                        duration={0.8}
                        staggerDelay={0.25}
                        filter={true}
                        className="text-2xl"
                    />
                    <TextGenerateEffect
                        words={problem.description}
                        duration={2}
                        staggerDelay={0.025}
                        filter={true}
                        className="text-lg text-center"
                    />
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 4, delay: 0.3 }}
                    >
                        <ExploreProblem problem={problem} />
                    </motion.div>
                </>
            );
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-between py-10">
            <div className="w-[80%] flex flex-col items-center gap-10 mt-20">
                <ProblemDesc />
                <Recommendations />
                <ProblemGenerating />
            </div>
            <div className="w-[80%] pb-[3rem]">
                <LlmClient updateProblem={setProblem} updateLoading={setIsLoading} />
            </div>
        </div>
    );
}

export default ProblemGenerator