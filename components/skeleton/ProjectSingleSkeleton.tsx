import Card from "../reusable/Card";

const ProjectSingleSkeleton = () => {
    return (
        <Card className="w-full flex flex-col gap-3">
            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-8 h-8"/>
            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-8"/>
            <div className="flex flex-wrap gap-2">
                {Array.from({length:12}).map((a,index)=>(
                    <div key={index} className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-16 h-8"/>
                ))} 
            </div>
            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-full h-40"/>
            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-40 h-12"/>
            <div className="bg-[#f2f1f6] dark:bg-[#313131] rounded-lg w-full h-80"/>
        </Card>
    )
}

export default ProjectSingleSkeleton;