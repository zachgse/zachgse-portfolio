import type { Metadata } from "next";
import Card from "@/components/reusable/Card";
import Banner from "@/components/features/Home/Banner";
import CareerStats from "@/components/features/Home/CareerStats";
import Skills from "@/components/features/Home/Skills";
import Expertise from "@/components/features/Home/Expertise";
import Contact from "@/components/features/Contact";

export const metadata: Metadata = {
  title: "Zach Estrella | Portfolio",
  description: "Portfolio of Zach Estrella",
};  

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col lg:w-2/3 gap-4"> 
        <Card className="relative text-white !p-0">          
          <Banner/>
        </Card>
        <Card>
          <CareerStats/>
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

export default Home;