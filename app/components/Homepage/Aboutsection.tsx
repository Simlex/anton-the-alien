import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface AboutSectionProps {

}

const AboutSection: FunctionComponent<AboutSectionProps> = (): ReactElement => {
    return (
        <section className="p-5 py-16 relative px-[8%] lg:text-center" id="about">
            <span className="absolute w-full h-full top-0 left-0 opacity-25 z-[5]">
                <Image src={images.about_bg} className="object-cover w-full h-full" alt="Space" />
            </span>
            <h2 className="text-4xl font-bold mb-4 font-Fredoka">ABOUT TOKEN</h2>
            <p className="text-sm font-normal leading-8">
                Introducing <b>$ANTON</b>, the token that sets <b>ANTON THE ALIEN</b> apart
                from the crowd, symbolizing innovation and uniqueness
                on TON
                Blockchain. <b>$ANTON</b> mirrors BTC with a total supply of 210,000,000,
                underlining it’s scarcity and driving market demand, distinguishing it
                from conventional meme coins.
            </p>
            <p className="text-sm font-normal leading-8">
                Our strategic design positions <b>ANTON THE ALIEN</b> as the front-runner in the 
                memecoin space for 2024, combining scarcity, farming opportunities, NFT integration, 
                and impactful partnerships. Join us on the journey where professionalism meets innovation, 
                and <b>$ANTON</b> emerges as the hottest memecoin in the ever-evolving crypto landscape.
            </p>
        </section>
    );
}

export default AboutSection;