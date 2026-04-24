"use client"
import React from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp, UserRound } from "lucide-react";

const Description = () => {
    const [expanded,setExpanded] = React.useState<boolean>(false);

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <UserRound size={20}/>
                <p className="font-bold text-2xl">About</p>
            </div>
            <p className={clsx(!expanded && "lg:line-clamp-3 line-clamp-6")}>
                Full-Stack Web Developer with 3 years of professional experience specializing in backend development using PHP (Laravel). I build secure, scalable systems with a strong emphasis on clean architecture, efficient data flow, and performance optimization.
                <br/>
                Experienced in designing and integrating RESTful APIs, as well as working with SQL databases through optimized queries, indexing, and structured data modeling. I also have exposure to NoSQL solutions such as MongoDB for flexible data handling.
                <br/>
                Beyond my core backend expertise, I’ve expanded into modern full-stack development—working with React, TypeScript, and Next.js to create responsive, type-safe frontend applications. I’ve also explored backend performance strategies, including caching with Redis and rate limiting, to improve system reliability at scale.
                <br/>
                I’m driven by a deep interest in system design, backend fundamentals, and building maintainable applications that perform efficiently in real-world environments.
            </p>
            <div onClick={() => setExpanded(prev=>!prev)}
                className="text-center text-info cursor-pointer hover:underline text-sm">
                {expanded ? (
                    <div className="flex items-center justify-center gap-1">
                        <ChevronUp size={16}/>
                        See less
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-1">
                        <ChevronDown size={16}/>
                        See more
                    </div>    
                )}
            </div>
        </div>
    )
}

export default Description;