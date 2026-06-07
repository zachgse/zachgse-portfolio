import type { Metadata } from "next";
import Card from "@/components/reusable/Card";
import AchievementContent from "@/components/features/Achievement/AchievementContent";

export const metadata: Metadata = {
    title: "Zach Estrella | Achievements",
    description: "Achievement section of Zach's Portfolio",
}; 

const Achievement = () => {
    
    return (
        <Card className="h-full">
            <AchievementContent/>
        </Card>
    )
}

export default Achievement;