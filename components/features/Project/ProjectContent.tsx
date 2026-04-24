import Link from "next/link";
import { formatDate } from "@/utils/helper";
import { Book, Folder } from "lucide-react";
import { cachedFetch } from "@/supabase/custom";
import { ProjectType } from "@/utils/types";

const ProjectContent = async() => {
    const projects = await cachedFetch("projects?order=developed_at.desc");
    // 
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Folder size={20}/>
                <p className="font-bold text-2xl">Projects</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                {projects.length > 0 && (
                    projects.map((project:ProjectType) => (
                        <Link href={`/project/${project.slug}`} key={project.id} 
                            className="col-span-1 border border-gray-300 dark:border-[#313131] dark:bg-[#313131] rounded-lg flex items-start gap-4 p-4 hover:border-info hover:text-info cursor-pointer">
                            <Book size={16} className="mt-1"/>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold">{project.name}</p>
                                <p className="text-gray-400 text-xs">Created on {formatDate(project.developed_at)}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default ProjectContent;