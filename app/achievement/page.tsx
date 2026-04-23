import type { Metadata } from "next";
import { Suspense } from "react";
import Card from "@/components/reusable/Card";
import AchievementContent from "@/components/features/Achievement/AchievementContent";
import AchievementSkeleton from "@/components/skeleton/AchievementSkeleton";

export const metadata: Metadata = {
    title: "Zach Estrella | Achievements",
    description: "Achievement section of Zach's Portfolio",
}; 

const Achievement = () => {
    return (
        <Card>
            <Suspense fallback={<AchievementSkeleton/>}>
                <AchievementContent/>
            </Suspense>
        </Card>
    )
}

export default Achievement;