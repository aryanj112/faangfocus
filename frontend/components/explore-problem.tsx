import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Problem } from "@/app/utils/types";

const ExploreProblem = ({ problem }: { problem: Problem }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className="
                        cursor-pointer 
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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{problem.title}</DialogTitle>
                    <DialogDescription>
                        {problem.description}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ExploreProblem;