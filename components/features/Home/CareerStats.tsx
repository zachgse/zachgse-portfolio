"use client"
import CountUp from "react-countup";
import Icon from "@/components/reusable/Icon";
import { Award, ChartSpline, Clock, Code, Folder } from "lucide-react";

type CareerStatsProps = {
    projectCount: number
    certCount: number
}

const CareerStats = ({projectCount,certCount}:CareerStatsProps) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <ChartSpline size={20}/>
                <p className="font-bold text-2xl">Career Stats</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#f2f1f6] dark:bg-[#313131] md:col-span-1 col-span-2 min-h-fit bg-gray-100 rounded-lg flex flex-col gap-8 p-4">
                    <div className="flex flex-wrap items-start gap-4">
                        <Icon number={1}>
                            <Clock size={24}/>
                        </Icon>
                        <CountUp start={0} end={3} duration={2.5} className="text-4xl font-bold"/>
                        <p>yrs</p>
                    </div>
                    <p className="text-sm font-semibold mt-auto">Experience</p>
                </div>
                <div className="bg-[#f2f1f6] dark:bg-[#313131] md:col-span-1 col-span-2 min-h-fit bg-gray-100 rounded-lg flex flex-col gap-8 p-4">
                    <div className="flex flex-wrap items-start gap-4">
                        <Icon number={2}>
                            <Award size={24}/>
                        </Icon>
                        <CountUp start={0} end={certCount} duration={2.5} className="text-4xl font-bold"/>
                    </div>
                    <p className="text-sm font-semibold mt-auto">Certificates</p>
                </div>
                <div className="bg-[#f2f1f6] dark:bg-[#313131] md:col-span-1 col-span-2 min-h-fit bg-gray-100 rounded-lg flex flex-col gap-8 p-4">
                    <div className="flex flex-wrap items-start gap-4">
                        <Icon number={3}>
                            <Folder size={24}/>
                        </Icon>
                        <CountUp start={0} end={projectCount} duration={2.5} className="text-4xl font-bold"/>
                    </div>
                    <p className="text-sm font-semibold mt-auto">Projects</p>
                </div>
                <div className="bg-[#f2f1f6] dark:bg-[#313131] md:col-span-1 col-span-2 min-h-fit bg-gray-100 rounded-lg flex flex-col gap-8 p-4">
                    <div className="flex flex-wrap items-start gap-4">
                        <Icon number={4}>
                            <Code size={24}/>
                        </Icon>
                        <CountUp start={0} end={17} duration={2.5} className="text-4xl font-bold"/>
                    </div>
                    <p className="text-sm font-semibold mt-auto">Technologies</p>
                </div>
            </div>  
        </div>
    )
}

export default CareerStats;