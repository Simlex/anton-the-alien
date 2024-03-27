"use client"
import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";

interface HerosectionProps {

}

const Herosection: FunctionComponent<HerosectionProps> = (): ReactElement => {
    return (
        <section className="p-5 pt-52 pb-20 px-[8%] relative w-screen min-h-[80vh] flex flex-col gap-16 border-b-8 border-secondary-sub lg:flex-row" id="hero">
            <div className="flex flex-col items-start lg:w-[50%]">
                <div className="absolute w-full h-full top-0 left-0 z-10 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-20 before:bg-gradient-to-t from-transparent to-black">
                    <span className="absolute w-full z-10 h-64 bottom-0 bg-gradient-to-b from-transparent to-primary-dark"></span>
                    <Image src={images.hero_bg} className="w-full h-full object-cover object-right-top opacity-40" alt="Hero" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, ease: "easeIn" }}
                    className="z-20 relative text-6xl font-extrabold mb-2 font-Fredoka before:content['ANTON THE ALIEN'] before:text-yellow-300 before:translate-x-7">
                    ANTON THE ALIEN
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'linear' }}
                    className="z-20 relative opacity-60 italic">
                    Where Memes Meet Blockchain Brilliance
                </motion.span>
                <motion.p
                    className="z-20 relative mt-6 mb-6 text-sm leading-7"
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'linear' }}>
                    Embracing decentralization, ANTON empowers its
                    community members to  actively participate in
                    governance, fostering inclusivity and collaboration.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'linear' }}
                    className="z-20 relative p-3 px-6 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark">
                    Download Whitepaper
                </motion.button>
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