export type Problem = {
    company: string;
    title: string;
    description: string;
    inputs: { name: string; type: string; description: string }[];
    examples: { input: any; output: any; explanation: string }[];
    constraints: string[];
    goal: string;
    difficulty: "easy" | "medium" | "hard";
    function_name: string;
    function_signature: string;
    hints: string[];
    test_cases: { input: any; output: any }[];
};

