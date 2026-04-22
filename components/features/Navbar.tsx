"use client"
import clsx from "clsx";
import { Award, Folder, House, Menu, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();

    return (
        <div className="w-full h-20 lg:hidden block bg-white dark:bg-[#212121] text-black dark:text-white fixed bottom-0 grid grid-cols-5 justify-items-center z-50 px-6">
            <Link href="/" className={clsx("w-full flex items-center justify-center hover:border-t-4 hover:border-info hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
                                pathName == "/" && "border-t-4 border-info"
            )}>
                <House size={28}/>
            </Link>
            <Link href="/about" className={clsx("w-full flex items-center justify-center hover:border-t-4 hover:border-info hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
                                pathName == "/about" && "border-t-4 border-info"
            )}>
                <UserRound size={28}/>
            </Link>
            <Link href="/project" className={clsx("w-full flex items-center justify-center hover:border-t-4 hover:border-info hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
                                pathName.startsWith("/project") && "border-t-4 border-info"
            )}>
                <Folder size={28}/>
            </Link>
            <Link href="/achievement" className={clsx("w-full flex items-center justify-center hover:border-t-4 hover:border-info hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
                                pathName == "/achievement" && "border-t-4 border-info"
            )}>
                <Award size={28}/>
            </Link>
            <Link href="/toggled" className={clsx("w-full flex items-center justify-center hover:border-t-4 hover:border-info hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
                                pathName == "/toggled" && "border-t-4 border-info"
            )}>
                <Menu size={28}/>
            </Link>
        </div>
    )
}

export default Navbar;