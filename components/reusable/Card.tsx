import clsx from "clsx";
import React from "react";

type CardProps = {
    children: React.ReactNode
    className?: string
}

const Card = ({children,className}:CardProps) => {
    return (
        <div className={clsx("min-h-fit bg-white dark:bg-[#212121] border border-gray-300 dark:border-[#212121] rounded-lg shadow-lg text-black dark:text-white p-4", 
                        className ?? `${className}`)}>
            {children}
        </div>
    )
}

export default Card;