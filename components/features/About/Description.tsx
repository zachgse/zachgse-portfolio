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
                Full-Stack Web Developer primarily focused on backend development using PHP (Laravel), building secure, scalable systems with clean architecture principles. Experienced in designing and integrating RESTful APIs while ensuring efficient data flow and application performance.
                Strong foundation in SQL databases, leveraging optimized queries, indexing, and structured data modeling to maintain reliability in fast-paced development environments. Also knowledgeable in NoSQL databases such as MongoDB.
                On the frontend, I develop responsive interfaces using HTML, CSS, and JavaScript, and I am currently deepening my expertise in React with TypeScript to strengthen modern, type-safe frontend development.
                Passionate about mastering core backend fundamentals, system design, and performance optimization to deliver maintainable, high-quality applications.
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