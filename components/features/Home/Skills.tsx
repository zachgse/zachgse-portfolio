import Image from "next/image";
import Marquee from "react-fast-marquee";
import php from "@/public/assets/img/skillset-icons/php.png";
import java from "@/public/assets/img/skillset-icons/java.png";
import python from "@/public/assets/img/skillset-icons/python.png";
import html from "@/public/assets/img/skillset-icons/html-5.png";
import css from "@/public/assets/img/skillset-icons/css-3.png";
import bootstrap from "@/public/assets/img/skillset-icons/bootstrap.png";
import javascript from "@/public/assets/img/skillset-icons/java-script.png";
import react from "@/public/assets/img/skillset-icons/react.png";
import vue from "@/public/assets/img/skillset-icons/vue.png";
import jira from "@/public/assets/img/skillset-icons/jira.png";
import github from "@/public/assets/img/skillset-icons/github.png";
import bitbucket from "@/public/assets/img/skillset-icons/bitbucket.png";
import mysql from "@/public/assets/img/skillset-icons/mysql.png";
import wordpress from "@/public/assets/img/skillset-icons/wordpress.png";
import typescript from "@/public/assets/img/skillset-icons/typescript.png";
import supabase from "@/public/assets/img/skillset-icons/supabase.png";
import nextjs from "@/public/assets/img/skillset-icons/nextjs.png";
import { Code } from "lucide-react";

const Skills = () => {
    const firstImages = [
        php,java,python,html,css,bootstrap,javascript,typescript
    ];

    const secondImages = [
        react,vue,nextjs,jira,github,bitbucket,mysql,supabase,wordpress
    ];
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Code size={20}/>
                <p className="font-bold text-2xl">Skills</p>
            </div>
            <Marquee gradient={false} speed={35} loop={0} autoFill>
                {firstImages.map((img, index) => (
                    <Image key={index} src={img} alt="Skill preview" className="w-10 h-10 mx-1"/>
                ))}
            </Marquee>
            <Marquee gradient={false} speed={35} direction="right" loop={0} autoFill>
                {secondImages.map((img, index) => (
                    <Image key={index} src={img} alt="Skill preview" className="w-10 h-10 mx-1"/>
                ))}
            </Marquee>
        </div>
    )
}

export default Skills;