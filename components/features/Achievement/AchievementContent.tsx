"use client"
import useSWR from "swr";
import clsx from "clsx";
import { supabase } from "@/supabase/client";
import Link from "next/link";
import { useSearchParams,useRouter } from "next/navigation";
import Button from "@/components/reusable/Button";
import { formatDate } from "@/utils/helper";
import { ArrowLeft, ArrowRight, Award, Calendar, ExternalLink } from "lucide-react";
import { CertificationType } from "@/utils/types";
import AchievementSkeleton from "@/components/skeleton/AchievementSkeleton";
import Error from "@/components/reusable/Error";

export const dynamic = 'force-dynamic';
const PER_PAGE = 8;

const fetchCertCount = async() => {
    const { count } = await supabase
                    .from("certifications")
                    .select("*", { count: "exact", head: true });
    return count;
}

const fetchCertificates = async(
    [_key, from, to]: [string, number, number]
) => {
    const { data } = await supabase
                        .from("certifications")
                        .select("*")
                        .order("achieved_at",{ascending:false})
                        .range(from,to)
    return data;
}

const AchievementContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page") ?? 1);
    const from = (page - 1) * PER_PAGE;
    const to = (page * PER_PAGE) - 1;
    const { data:certCount,isLoading:isCertCountLoading } = useSWR("certifications",fetchCertCount);
    const { data: achievements, isLoading: isCertLoading } = useSWR(
        [`certificate?page=${page}`, from, to],
        fetchCertificates
    );
    
    if (isCertCountLoading || isCertLoading) return <AchievementSkeleton/>

    const totalPage = certCount == null || certCount == undefined ? 0 : Math.ceil(certCount / PER_PAGE);

    const updatePage = (newPage:number) => {
        if (newPage >= 1 && newPage <= totalPage) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", String(newPage));
            router.push(`?${params.toString()}`);
        }
    }

    if (page < 1 || page > totalPage) return <Error/>

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Award size={20}/>
                <p className="font-bold text-2xl">Licenses & Certifications</p>
            </div>
            
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
                {achievements?.map((achievement:CertificationType) => (
                    <div key={achievement.id} className="lg:col-span-1 md:col-span-2 col-span-4 flex flex-col gap-2 text-center group">
                        <div className="border border-gray-300 dark:border-[#212121] relative overflow-hidden rounded-lg">
                            <img src={achievement.image} alt={`${achievement.title} certificate preview`} className="w-full h-60 rounded-lg"/>

                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative bottom-8 flex items-center justify-center text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link href={achievement.url} target="_blank">
                                    <Button type="tertiary" className="w-fit">
                                        <ExternalLink size={12}/>
                                        Show Credential
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col text-black dark:text-white">
                            <p className="font-bold">{achievement.title}</p>
                            <p>{achievement.issuer}</p>
                        </div>
                        
                        <div className="flex items-center justify-center gap-1 text-gray-400 dark:text-white text-sm">
                            <Calendar size={12}/>
                            {formatDate(achievement.achieved_at)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 items-center mt-auto">
                {page > 1 && 
                <p onClick={() => updatePage(page - 1)}
                    className={clsx(
                    page > 1 ? "text-blue-500 cursor-pointer" : "cursor-not-allowed text-blue-300"
                )}>
                    <ArrowLeft size={16}/>
                </p>
                }
                {Array.from({length:totalPage}).map((p,index:number) => (
                    <p key={index}
                        onClick={() => updatePage(index+1)}
                        className={clsx("cursor-pointer text-lg",
                            page == index + 1 ? "text-blue-500 underline font-semibold" : "text-blue-400"
                        )}>
                        {index+1}
                    </p>
                ))}
                {page < totalPage && 
                <p onClick={() => updatePage(page + 1)}
                    className={clsx(
                    page < totalPage ? "text-blue-500 cursor-pointer" : "cursor-not-allowed text-blue-300"
                )}>
                    <ArrowRight size={16}/>
                </p>
                }
            </div>
        </div>
    )
}

export default AchievementContent;