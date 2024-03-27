"use client"
import images from "@/public/images";
import Image from "next/image";
import React, { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";

interface UtilitiesSectionProps {

}

const UtilitiesSection: FunctionComponent<UtilitiesSectionProps> = (): ReactElement => {

    const utilities = [
        {
            title: "Low Supply Excellence",
            description: `With a scarcity mirroring BTC, $ANTON
            establishes itself as a sought-after token,
            fostering heightened
            market demand`
        },
        {
            title: "Farming Opportunities",
            description: `Stake $ANTON to unlock farming rewards, including interest and token airdrops, providing a lucrative avenue for token holders to maximize their holdings`
        },
        {
            title: "Strategic Partnerships",
            description: `ANTON THE ALIEN is poised to collaborate with major projects on TON Blockchain, ensuring a symbiotic relationship and rewarding these partnerships with exclusive airdrops`
        },
        {
            title: "NFT Integration",
            description: `ANTON seamlessly incorporates NFTs with diverse collections, adding a layer of uniqueness and creativity to the token’s ecosystem`
        },
        {
            title: "NFT Rewards for Holders",
            description: `$ANTON holders of any NFT collection from the project enjoy exclusive benefits, receiving periodic $ANTON airdrops`
        },
    ]

    return (
        <section className="p-5 py-20 relative px-[8%] before:w-full before:h-10 before:bg-off-black before:absolute before:-top-4 before:left-0 before:z-10">
            <span className="absolute w-full h-full top-0 left-0 opacity-25 z-[5]">
                <Image src={images.utilities_bg} className="object-cover w-full h-full" alt="Space" />
            </span>
            <h2 className="text-4xl font-bold mb-8 text-center font-Fredoka">UTILITIES</h2>
            <div className="flex flex-col z-20 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {
                    utilities.map((utility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: 'linear' }}
                            className="flex flex-col mb-6 z-20 p-5 rounded-2xl relative overflow-hidden group"
                            style={{ background: "rgba(255, 255, 255, 0.1)" }}>
                            <span className="before:opacity-70 group-hover:before:opacity-100 before:absolute before:w-[80px] before:h-20 before:bg-white before:blur-3xl before:rounded-full before:bg-gradient-to-r before-from-primary before-to-secondary-sub before:content-['']"></span>
                            <h3 className="text-base font-semibold mb-2 text-secondary-sub">{utility.title}</h3>
                            <p className="text-sm font-light leading-8">{utility.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}

export default UtilitiesSection;