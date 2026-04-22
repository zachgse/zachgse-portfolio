import { Metadata } from "next";
import ProjectContent from "@/components/features/Project/ProjectContent";
import Card from "@/components/reusable/Card";
import { createClient } from "@/supabase/server";

export const metadata: Metadata = {
    title: "Zach Estrella | Projects",
    description: "Project section of Zach's Portfolio",
}; 

const Project = async() => {
    const supabase = await createClient();
    const { data:projects } = await supabase.from("projects").select("*").order("created_at",{ascending:false});

    return (
        <Card>
            <ProjectContent projects={projects ?? []}/>
        </Card>
    )
}

export default Project;