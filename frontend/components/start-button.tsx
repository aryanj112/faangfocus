"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const StartButton = () => {
    const router = useRouter();
    const supabase = createClient();

    const handleSubmit = async () => {
        const { data, error } = await (await supabase).auth.getSession()
        const { session } = data
        if (error) throw error;
        if (session) {
            router.push("/protected");
        }
        else {
            router.push("/auth/login")
        }
    }
    return (
        <Button onClick={handleSubmit} className="text-xl w-[9.5rem] h-[2rem]">
            Get Started
        </Button>
    )
}

export default StartButton