"use client"
import { Oval } from "react-loader-spinner";
import Card from "./Card";
import { useTheme } from "next-themes";

const Loader = () => {
    const {theme} = useTheme();
    return (
        <Card className="min-h-screen flex items-center justify-center">
            <Oval
                height={48}
                width={48}
                color={theme == "dark" ? "white" : "info"}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor={theme == "dark" ? "white" : "info"}
                strokeWidth={5}
                strokeWidthSecondary={5}
            />
        </Card>
    )
}

export default Loader;