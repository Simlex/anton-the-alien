import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface HerosectionProps {

}

const Herosection: FunctionComponent<HerosectionProps> = (): ReactElement => {
    return (
        <section className="p-5 pt-52 pb-20 px-[8%] relative w-screen min-h-[80vh] flex flex-col gap-16 border-b-8 border-secondary-sub lg:flex-row">
            <div className="flex flex-col items-start lg:w-[50%]">
                <div className="absolute w-full h-full top-0 left-0 z-10 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-20 before:bg-gradient-to-t from-transparent to-black">
                    <span className="absolute w-full z-10 h-64 bottom-0 bg-gradient-to-b from-transparent to-primary-dark"></span>
                    <Image src={images.hero_bg} className="w-full h-full object-cover object-right-top opacity-40" alt="Hero" />
                </div>
                <h1 className="z-20 relative text-6xl font-extrabold mb-2 font-Fredoka">
                    ANTON THE ALIEN
                </h1>
                <span className="z-20 relative opacity-60 italic">
                    Where Memes Meet Blockchain Brilliance
                </span>
                <p className="z-20 relative mt-6 mb-6 text-sm leading-7">
                    Embracing decentralization, ANTON empowers its
                    community members to  actively participate in
                    governance, fostering inclusivity and collaboration.
                </p>
                <button className="z-20 relative p-3 px-6 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark">
                    Download Whitepaper
                </button>
            </div>
            <div className="lg:w-[50%]">
                <div className="w-[250px] h-[250px] mx-auto z-[15] relative rounded-full overflow-hidden" style={{ boxShadow: "0px 0px 150px rgba(21, 21, 21, 0.6)" }}>
                    {/* <Image src={images.ton} alt="TON logo" /> */}
                    <Image src={images.ton} className="bg-white border-b-4" alt="TON logo" />
                </div>
            </div>
        </section>
    );
}

export default Herosection;