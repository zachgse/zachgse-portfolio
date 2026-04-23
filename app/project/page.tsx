import { Metadata } from "next";
import ProjectContent from "@/components/features/Project/ProjectContent";
import Card from "@/components/reusable/Card";
import { Suspense } from "react";
import ProjectAllSkeleton from "@/components/skeleton/ProjectAllSkeleton";

export const metadata: Metadata = {
    title: "Zach Estrella | Projects",
    description: "Project section of Zach's Portfolio",
}; 

const Project = () => {
    return (
        <Card>
            <Suspense fallback={<ProjectAllSkeleton/>}>
                <ProjectContent/>
            </Suspense>
        </Card>
    )
}

export default Project;