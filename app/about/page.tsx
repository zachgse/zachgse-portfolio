import type { Metadata } from "next";
import Card from "@/components/reusable/Card";
import Contact from "@/components/features/Contact";
import Me from "@/components/features/About/Me";
import Description from "@/components/features/About/Description";
import Certificate from "@/components/features/About/Certificate";
import Education from "@/components/features/About/Education";
import Work from "@/components/features/About/Work";
import AboutSkeleton from "@/components/skeleton/AboutSkeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Zach Estrella | About",
    description: "About section of Zach's Portfolio",
};  

const About = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex flex-col lg:w-2/3 gap-4"> 
                <Card className="relative w-full h-60 !bg-black">
                    <Me/>
                </Card>
                <Card>
                    <Description/>
                </Card>
                <Card>
                    <Suspense fallback={<AboutSkeleton/>}>
                        <Certificate/>
                    </Suspense> 
                </Card>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/3">
                <Card>
                    <Education/>
                </Card>
                <Card>
                    <Work/>
                </Card>
                <Card>
                    <Contact/>
                </Card>
            </div>
        </div>
    );
}

export default About;