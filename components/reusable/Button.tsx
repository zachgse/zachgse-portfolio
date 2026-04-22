import clsx from "clsx"

type ButtonProps = {
    children: React.ReactNode
    className?: string
    type: "primary" | "secondary" | "tertiary"
}

const Button = ({children,className,type}:ButtonProps) => {
    return (
        <div className={clsx("min-w-fit rounded-md flex items-center gap-2 cursor-pointer",
            className ?? `${className}`,
            type == "primary" && "btn btn-info text-white",
            type == "secondary" && "border border-gray-300 px-2 py-1 text-xs hover:border-info hover:text-info",
            type == "tertiary" && "border border-white bg-white text-black px-4 py-1 text-xs hover:border-info hover:text-info"
        )}>
            {children}
        </div>
    )
}

export default Button;