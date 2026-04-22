import { Calendar, GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <GraduationCap size={20}/>
                <p className="font-bold text-2xl">Education</p>
            </div>
            <div className="flex gap-4">
                <img src="../assets/img/csb.png" alt="De La Salle - College of Saint Benilde logo" className="w-16 h-16"/>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">Bachelor of Science in Information Systems</p>
                    <p className="text-xs font-semibold">De La Salle - College of Saint Benilde</p>
                    <p className="text-gray-400 text-xs dark:text-white flex items-center gap-1">
                        <Calendar size={12}/>
                        Aug 2018 - Oct 2022
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;