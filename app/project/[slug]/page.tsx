import { Metadata } from "next";
import Card from "@/components/reusable/Card";
import Error from "@/components/reusable/Error";
import ProjectSingleContent from "@/components/features/Project/ProjectSingleContent";
import { cachedFetch } from "@/supabase/custom";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
    const slug = await params;
    const format = slug.slug.charAt(0).toUpperCase() + slug.slug.slice(1);
    return {
        title: `Zach Estrella | ${format}`,
        description: `Project description of ${format} project`,
    };
}

const ProjectSlug = async({params}:{params:{slug:string}}) => {
    const slug = await params;
    const projects = await cachedFetch(`projects?slug=eq.${await slug.slug}&limit=1`);
    const project = projects?.[0] ?? null;

    if (!slug || !project) return <Error/>

    return (
        <Card className="w-full flex flex-col gap-3">
            <ProjectSingleContent project={project}/>
        </Card>
    )
}

export default ProjectSlug;