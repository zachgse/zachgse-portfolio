import Link from "next/link";
import { Project } from "@/app/project/actions";
import { ArrowLeft, Book, Images } from "lucide-react";

const ProjectSingleContent = ({project}:{project:Project|null}) => {
    return (
        <>
            <Link href="/project">
                <ArrowLeft size={20}/>
            </Link>
            <div className="flex items-center gap-2">
                <Book size={20}/>
                <p className="font-bold text-2xl">{project?.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag:{tag:string},index:number) => (
                    <div key={index} className="border border-gray-300 rounded-lg px-4 py-1 text-xs cursor-pointer hover:border-info hover:text-info">
                        {tag.tag}
                    </div>
                ))}
            </div>
            <p>{project?.description}</p>
            <div className="flex items-center gap-2">
                <Images size={20}/>
                <p className="font-bold text-2xl">Images</p>
            </div>
            <div className="flex flex-wrap gap-4">
                {project?.images.map((image:{url:string},index:number) => (
                    <img key={index} src={image.url} alt={`${project.name} image ${index+1} preview`} className="w-full h-full"/>
                ))}
            </div>
        </>
    )
}

export default ProjectSingleContent;