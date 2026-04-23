import { Metadata } from "next";
import Card from "@/components/reusable/Card";
import Contact from "@/components/features/Contact";
import Me from "@/components/features/About/Me";
import Description from "@/components/features/About/Description";
import Certificate from "@/components/features/About/Certificate";
import Education from "@/components/features/About/Education";
import Work from "@/components/features/About/Work";
import { createClient } from "@/supabase/server";

export const metadata: Metadata = {
    title: "Zach Estrella | About",
    description: "About section of Zach's Portfolio",
};  

export const revalidate = 300;

const About = async() => {
    const supabase = await createClient();
    const { data:certificates,error } = await supabase
                                .from("certifications")
                                .select("*")
                                .limit(4);

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
                    <Certificate certificates={certificates ?? []}/>
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
