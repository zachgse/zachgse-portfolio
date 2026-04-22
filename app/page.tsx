import type { Metadata } from "next";
import Card from "@/components/reusable/Card";
import Banner from "@/components/features/Home/Banner";
import CareerStats from "@/components/features/Home/CareerStats";
import Skills from "@/components/features/Home/Skills";
import Expertise from "@/components/features/Home/Expertise";
import Contact from "@/components/features/Contact";
import { createClient } from "@/supabase/server";

export const metadata: Metadata = {
  title: "Zach Estrella | Portfolio",
  description: "Portfolio of Zach Estrella",
};  

export default async function Home() {
  const supabase = await createClient();
  const { count:projectCount } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });
  const { count:certCount, error } = await supabase
    .from("certifications")
    .select("*", { count: "exact", head: true });
  
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col lg:w-2/3 gap-4"> 
        <Card className="relative text-white !p-0">          
          <Banner/>
        </Card>
        <Card>
          <CareerStats projectCount={projectCount ?? 0} certCount={certCount ?? 0}/>
        </Card>
      </div>
      <div className="flex flex-col gap-4 lg:w-1/3">
        <Card>
          <Skills/>
        </Card>
        <Card>
          <Expertise/>
        </Card>
        <Card>
          <Contact/>
        </Card>
      </div>
    </div>
  );
}
