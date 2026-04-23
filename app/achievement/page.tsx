import { Metadata } from "next";
import Card from "@/components/reusable/Card";
import AchievementContent from "@/components/features/Achievement/AchievementContent";
import { createClient } from "@/supabase/server";

export const metadata: Metadata = {
    title: "Zach Estrella | Achievements",
    description: "Achievement section of Zach's Portfolio",
}; 

export const revalidate = 300;

const Achievement = async() => {
    const supabase = await createClient();
    const { data:achievements,error } = await supabase
                                .from("certifications")
                                .select("*");
    return (
        <Card>
            <AchievementContent achievements={achievements ?? []}/>
        </Card>
    )
}

export default Achievement;