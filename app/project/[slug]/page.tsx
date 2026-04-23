import { Metadata } from "next";
import { Suspense } from "react";
import Card from "@/components/reusable/Card";
import Error from "@/components/reusable/Error";
import ProjectSingleSkeleton from "@/components/skeleton/ProjectSingleSkeleton";
import ProjectSingleContent from "@/components/features/Project/ProjectSingleContent";

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug.slug}`, {
        next: { revalidate: 3600 },
    });
    const project = await response.json();

    if (!slug || !project) return <Error/>

    return (
        <Card className="w-full flex flex-col gap-3">
            <Suspense fallback={<ProjectSingleSkeleton/>}>
                <ProjectSingleContent project={project}/>
            </Suspense>
        </Card>
    )
}

export default ProjectSlug;