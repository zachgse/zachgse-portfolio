import { BriefcaseBusiness, Calendar } from "lucide-react";

const Work = () => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <BriefcaseBusiness size={20}/>
                <p className="font-bold text-2xl">Work Experience</p>
            </div>
            <div className="flex gap-4">
                <img src="../assets/img/ziaplex.jpg" alt="Ziaplex logo" className="w-16 h-16"/>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">Web Developer</p>
                    <p className="text-xs font-semibold">Ziaplex Inc.</p>
                    <p className="text-gray-400 text-xs dark:text-white flex items-center gap-1">
                        <Calendar size={12}/>
                        Aug 2022 - Oct 2025
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Work;