import Image from "next/image";
import GradPic from "@/public/assets/img/grad.jpeg"
import Button from "@/components/reusable/Button";
import { Send } from "lucide-react";

const Me = () => {
    return (
        <>
            <div className="absolute -bottom-1 left-0 w-full">
                <div className="bg-white dark:bg-[#212121] w-full h-36 rounded-lg"/>
            </div>
            <div className="absolute bottom-32 left-20 w-20 h-20">
                <Image src={GradPic}
                    alt="Zach Estrella"
                    className="w-full h-full object-cover object-top scale-200 origin-top rounded-full border-2 border-white"/>
            </div>
            <div className="absolute bottom-10 left-56 flex flex-col gap-2">
                <p className="font-bold text-2xl">Zach Estrella</p>
                <Button type="primary">
                    <Send size={16}/>
                    Message
                </Button>
            </div>
        </>
    )
}

export default Me;