import { FunctionComponent, ReactElement } from "react";
import Herosection from "./components/Homepage/Herosection";
import AboutSection from "./components/Homepage/Aboutsection";
import UtilitiesSection from "./components/Homepage/Utilitiessection";
import RoadmapSection from "./components/Homepage/Roadmapsection";

interface HomepageProps {
    
}
 
const Homepage: FunctionComponent<HomepageProps> = ():ReactElement => {
    return ( 
        <main className="">
            <Herosection />
            <AboutSection />
            <UtilitiesSection />
            <RoadmapSection />
        </main>
     );
}
 
export default Homepage;