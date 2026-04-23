import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/supabase/server";
import Card from "@/components/reusable/Card";
import Error from "@/components/reusable/Error";
import { ArrowLeft, Book, Images } from "lucide-react";

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

export const revalidate = 300;

const ProjectSlug = async({params}:{params:{slug:string}}) => {
    const slug = await params;
    const supabase = await createClient();
    const { data:project,error } = await supabase
                                        .from("projects")
                                        .select("*")
                                        .eq("slug",slug.slug)
                                        .single();

    if (!slug || error) return <Error/>

    return (
        <Card className="w-full flex flex-col gap-3">
            <Link href="/project">
                <ArrowLeft size={20}/>
            </Link>
            <div className="flex items-center gap-2">
                <Book size={20}/>
                <p className="font-bold text-2xl">{project.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag:{tag:string},index:number) => (
                    <div key={index} className="border border-gray-300 rounded-lg px-4 py-1 text-xs cursor-pointer hover:border-info hover:text-info">
                        {tag.tag}
                    </div>
                ))}
            </div>
            <p>{project.description}</p>
            <div className="flex items-center gap-2">
                <Images size={20}/>
                <p className="font-bold text-2xl">Images</p>
            </div>
            <div className="flex flex-wrap gap-4">
                {project.images.map((image:{url:string},index:number) => (
                    <img key={index} src={image.url} alt={`${project.name} image ${index+1} preview`} className="w-full h-full"/>
                ))}
            </div>
        </Card>
    )
}

export default ProjectSlug;