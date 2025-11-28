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
const ExploreProblem = () => {
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
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ExploreProblem;