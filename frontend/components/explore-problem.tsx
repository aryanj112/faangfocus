import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Problem } from "@/app/utils/types";
import { Separator } from "./ui/separator";
import CodeButton from "./code-button";

const ExploreProblem = ({ problem }: { problem: Problem }) => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case "easy":
                return "bg-green-500/20 text-green-700 dark:text-green-400";
            case "medium":
                return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
            case "hard":
                return "bg-red-500/20 text-red-700 dark:text-red-400";
            default:
                return "bg-gray-500/20 text-gray-700 dark:text-gray-400";
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className="
                        px-[1rem] py-3 
                        rounded-lg 
                        text-black
                        font-bold
                        bg-white 
                        hover:bg-muted/80 
                        hover:text-white
                        text-center 
                        font-medium 
                        shadow-sm 
                        transition
                    "
                >
                    Explore Problem
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between gap-4 mt-4">
                        <DialogTitle className="text-2xl">{problem.title}</DialogTitle>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline">{problem.company}</Badge>
                            <Badge className={getDifficultyColor(problem.difficulty)}>
                                {problem.difficulty.toUpperCase()}
                            </Badge>
                        </div>
                    </div>
                    <DialogDescription className="text-base pt-2">
                        {problem.description}
                    </DialogDescription>

                </DialogHeader>
                <div className="flex justify-center">

                    <CodeButton />


                </div>

                <div className="space-y-6 mt-4">
                    {/* Goal */}
                    {problem.goal && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Goal</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{problem.goal}</p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Function Signature */}
                    {problem.function_signature && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Function Signature</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <code className="block p-3 bg-muted rounded-md text-sm font-mono">
                                    {problem.function_signature}
                                </code>
                                {problem.function_name && (
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Function name: <code className="bg-muted px-1 rounded">{problem.function_name}</code>
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Inputs */}
                    {problem.inputs && problem.inputs.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Inputs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {problem.inputs.map((input, index) => (
                                        <div key={index} className="border-l-2 border-primary pl-3">
                                            <div className="flex items-center gap-2">
                                                <code className="text-sm font-mono font-semibold">{input.name}</code>
                                                <Badge variant="outline" className="text-xs">{input.type}</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{input.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Constraints */}
                    {problem.constraints && problem.constraints.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Constraints</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-1">
                                    {problem.constraints.map((constraint, index) => (
                                        <li key={index} className="text-sm text-muted-foreground">
                                            {constraint}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {/* Examples */}
                    {problem.examples && problem.examples.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Examples</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {problem.examples.map((example, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold mb-1">Input:</p>
                                                    <code className="block p-2 bg-muted rounded text-sm font-mono">
                                                        {JSON.stringify(example.input, null, 2)}
                                                    </code>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold mb-1">Output:</p>
                                                    <code className="block p-2 bg-muted rounded text-sm font-mono">
                                                        {JSON.stringify(example.output, null, 2)}
                                                    </code>
                                                </div>
                                            </div>
                                            {example.explanation && (
                                                <div>
                                                    <p className="text-xs font-semibold mb-1">Explanation:</p>
                                                    <p className="text-sm text-muted-foreground">{example.explanation}</p>
                                                </div>
                                            )}
                                            {index < problem.examples.length - 1 && <Separator className="my-4" />}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Hints */}
                    {problem.hints && problem.hints.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Hints</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ol className="list-decimal list-inside space-y-2">
                                    {problem.hints.map((hint, index) => (
                                        <li key={index} className="text-sm text-muted-foreground">
                                            {hint}
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>
                    )}

                    {/* Test Cases */}
                    {problem.test_cases && problem.test_cases.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Test Cases</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {problem.test_cases.map((testCase, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex gap-4">
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold mb-1">Input:</p>
                                                    <code className="block p-2 bg-muted rounded text-sm font-mono">
                                                        {JSON.stringify(testCase.input, null, 2)}
                                                    </code>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-semibold mb-1">Expected Output:</p>
                                                    <code className="block p-2 bg-muted rounded text-sm font-mono">
                                                        {JSON.stringify(testCase.output, null, 2)}
                                                    </code>
                                                </div>
                                            </div>
                                            {index < problem.test_cases.length - 1 && <Separator className="my-4" />}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ExploreProblem;