"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CodeButton = () => {
    const router = useRouter();
    const handleSubmit = async () => {
        router.push("/code");
    }
    return (
        <Button onClick={handleSubmit} className="text-xl w-[9rem] h-[2rem]" >
            Start Coding
        </Button>
    )
}

export default CodeButton