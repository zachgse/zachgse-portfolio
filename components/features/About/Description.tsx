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
                I’m a Full-Stack Web Developer with 3 years of professional experience, specializing in backend development using PHP (Laravel). 
                I build secure, scalable, and maintainable systems with a strong focus on clean architecture, efficient data flow, 
                and performance optimization. My experience includes designing and integrating RESTful APIs, optimizing SQL 
                databases through indexing and query tuning, and applying structured data modeling for reliable backend systems. 
                I also have exposure to NoSQL solutions such as MongoDB for flexible and unstructured data use cases. 
                On the frontend, I work with React, TypeScript, and Next.js to build responsive, type-safe applications 
                with modern UI patterns. I’ve implemented performance strategies such as caching with Redis, rate limiting, 
                and background processing to improve system reliability and scalability. Recently, I’ve also been exploring AI-powered applications 
                and system design principles, with a growing interest in architecture patterns that support scalable, intelligent, and 
                production-ready software systems.
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