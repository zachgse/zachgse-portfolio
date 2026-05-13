import Link from "next/link";
import { ArrowLeft, Book, Images, TvMinimalPlay } from "lucide-react";
import { ProjectType } from "@/utils/types";
import Button from "@/components/reusable/Button";
import { FaGithub } from "react-icons/fa";

const ProjectSingleContent = ({project}:{project:ProjectType|null}) => {
    return (
        <>
            <Link href="/project">
                <ArrowLeft size={20}/>
            </Link>
            <div className="flex md:flex-row flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Book size={20}/>
                    <p className="font-bold text-2xl">{project?.name}</p>
                </div>
                <div className="md:ms-auto flex gap-2">
                    {project?.preview_url && (
                    <a href={project.preview_url} target="_blank">
                        <Button type="primary">
                            <TvMinimalPlay size={16}/>
                            Preview
                        </Button>
                    </a>
                    )}
                    {project?.github_url && (
                        <a href={project.github_url} target="_blank">
                            <Button type="secondary" className="h-10 px-4">
                                <FaGithub size={16}/>
                                Github
                            </Button>
                        </a>
                    )}
                </div>
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