import clsx from "clsx";

type IconProps = {
    number: 1 | 2 | 3 | 4
    children: React.ReactNode
}

const Icon  = ({number,children}:IconProps) => {
    return (
        <div className={clsx("text-white rounded-xl p-2",
                number == 1 && "bg-linear-to-r from-[#0077b6] to-[#b6dce3]",
                number == 2 && "bg-linear-to-r from-[#ffdbdf] to-[#ff4f74]",
                number == 3 && "bg-linear-to-r from-[#56ab2f] to-[#a8e063]",
                number == 4 && "bg-linear-to-r from-[#ffe797] to-[#f5b301]"
        )}>
            {children}
        </div>
    )
}

export default Icon;