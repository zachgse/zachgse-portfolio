"use client"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import GradPic from "@/public/assets/img/grad.png"
import Button from "../reusable/Button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Award, Download, Folder, House, Moon, UserRound } from "lucide-react";

const Sidebar = () => {
    const pathName = usePathname();
    const {theme,setTheme} = useTheme();

    return (
        <div className="h-full flex flex-col gap-4">
            <div className="w-32 h-32 relative overflow-hidden rounded-full mx-auto">
                <Image
                    src={GradPic}
                    alt="Zach Estrella"
                    fill
                    className="object-cover object-top scale-100"
                    priority
                />
            </div>
            <div className="text-center">
                <p className="font-bold text-center text-2xl">Zach Estrella</p>
                <p className="text-center">Software Engineer</p>
            </div>
            <a href="../assets/pdf/Zach Estrella - Resume.pdf" target="_blank">
                <Button type="primary">
                    <Download size={20}/>
                    Resume
                </Button>
            </a>
            <div className="flex flex-col lg:block hidden">
                <Link href="/" className={clsx("w-full flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c] p-3",
                                            pathName == "/" && "text-info bg-gray-100 dark:bg-[#2c2c2c] dark:hover:bg-[#2c2c2c]" 
                )}>
                    <House size={20}/>
                    Home
                </Link>
                <Link href="/about" className={clsx("w-full flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c] p-3",
                                            pathName == "/about" && "text-info bg-gray-100 dark:bg-[#2c2c2c] dark:hover:bg-[#2c2c2c]"
                )}>
                    <UserRound size={20} />
                    About
                </Link>
                <Link href="/project" className={clsx("w-full flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c] p-3",
                                            pathName.startsWith("/project")  && "text-info bg-gray-100 dark:bg-[#2c2c2c] dark:hover:bg-[#2c2c2c]"
                )}>
                    <Folder size={20}/>
                    Projects
                </Link>
                <Link href="/achievement" className={clsx("w-full flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c] p-3",
                                            pathName == "/achievement" && "text-info bg-gray-100 dark:bg-[#2c2c2c] dark:hover:bg-[#2c2c2c]"
                )}>
                    <Award size={20}/>
                    Achievements
                </Link>
            </div>
            <div className="mt-auto flex flex-col items-center gap-8">
                <div className="w-full bg-gray-100 dark:bg-[#2c2c2c] rounded-md flex items-center gap-2 h-16 p-4">
                    <Moon size={20}/>
                    Dark Mode
                    <input onChange={(e) => setTheme(prev=>theme == "dark" ? "light" : "dark")} checked={theme == "dark"}
                        type="checkbox" 
                        className="toggle theme-controller ml-auto"/>
                </div>
                <p className="text-xs text-gray-500 dark:text-white">
                    Built by Zach Estrella © {new Date().getFullYear()} All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Sidebar;