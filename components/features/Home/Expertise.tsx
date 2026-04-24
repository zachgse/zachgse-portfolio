"use client"
import React from "react";
import { Star } from "lucide-react";

const Expertise = () => {
    const items = [
        {
            question: "Web Development",
            answer:
                "Full-stack developer with 3+ years of experience building scalable web applications, with a strong backend focus using PHP (Laravel). Experienced in designing RESTful APIs and implementing performance-driven solutions such as Redis caching, rate limiting, and JWT-based authentication. On the frontend, I use Next.js, React, and TypeScript to create responsive, maintainable, and high-performing user interfaces, with an emphasis on clean architecture and seamless system integration.",
        },
        {
            question: "Database Management",
            answer:
                "I primarily work with SQL databases including MySQL, PostgreSQL, and SQLite, focusing on optimized queries, indexing, and efficient data modeling to ensure consistent performance in fast-paced environments. I also have working knowledge of NoSQL databases such as MongoDB, allowing me to handle flexible and unstructured data when needed.",
        },
        {
            question: "UI/UX Design",
            answer:
                "I design intuitive, user-centered interfaces with a strong focus on usability and visual clarity, creating consistent and engaging experiences across devices. I use tools like Figma and WordPress to translate ideas into practical, well-structured designs.",
        },
        {
            question: "Development Tools",
            answer:
                "I use tools such as GitHub, Bitbucket, Jira, Postman, and VS Code to manage version control, streamline collaboration, test APIs, and maintain efficient development workflows.",
        }
    ];
    const [openIndex,setOpenIndex] = React.useState<number|null>()

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Star size={20}/>
                <p className="font-bold text-2xl">Expertise</p>
            </div>
            <div>
                {items.map((item, index) => (
                    <div
                    key={index}
                    className={`transition-all duration-300 ease-in-out collapse collapse-plus ${
                        openIndex === index ? "collapse-open" : ""
                    }`}
                    >
                    <div className="flex items-center gap-4 collapse-title font-semibold cursor-pointer 
                        border-b border-gray-300 dark:border-[#2c2c2c]"
                        onClick={() => setOpenIndex(prev=> (
                            openIndex === index ? null : index
                        ))}
                    >
                        {item.question}
                    </div>
                    <div className="collapse-content text-sm">
                        <div className="mt-3">
                        {item.answer}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expertise;