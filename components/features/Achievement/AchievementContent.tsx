import Link from "next/link";
import Button from "@/components/reusable/Button";
import { formatDate } from "@/utils/helper";
import { Award, Calendar, ExternalLink } from "lucide-react";
import type { Certificate } from "@/app/api/certificates/route";

const AchievementContent = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/certificates`, {
        next: { revalidate: 3600 },
    });
    const achievements = await response.json();

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Award size={20}/>
                <p className="font-bold text-2xl">Licenses & Certifications</p>
            </div>
            
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
                {achievements.map((achievement:Certificate) => (
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
        </div>
    )
}

export default AchievementContent;