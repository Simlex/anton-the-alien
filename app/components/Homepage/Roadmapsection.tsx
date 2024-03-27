"use client"
import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";

interface RoadmapSectionProps {

}

const RoadmapSection: FunctionComponent<RoadmapSectionProps> = (): ReactElement => {

    const roadmap = [
        {
            title: "Phase 1",
            desc: [
                "Website development and launch",
                "Promotion and marketing campaign",
                "Presale Launch",
                "Distribution of tokens to investors",
                "Dex listings",
                "First $ANTON CEX listing",
                "Launch of $ANTON NFT collection"
            ]
        },
        {
            title: "Phase 2",
            desc: [
                "Merchandise Development",
                "Partnership airdrops",
                "Farming/Staking Launch",
                "More CEX Listings",
                "Enhanced Community Engagement",
            ]
        },
        {
            title: "Phase 3",
            desc: [
                "ANTON DEX Development",
                "ANTON Awareness Campaigns",
                "Partnership Expansion",
                "Continued Ecosystem Development",
            ]
        },
    ]

    return (
        <section className="px-5 py-20 lg:px-[8%] relative border-none" id="roadmap">
            <span className="absolute w-full h-full top-0 left-0 opacity-25 z-[5]">
                <Image src={images.roadmap_bg} className="object-cover w-full h-full" alt="Space" />
            </span>

            <div className="relative z-20 h-20 grid place-items-center pt-6">
                <svg className="absolute top-0" width="100%" height="90" viewBox="0 0 430 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.7738 0H374.634C374.634 0 368.645 28.1393 372.857 43.5535C382.303 78.1159 430 44.5659 430 44.5659C430 44.5659 382.303 11.0159 372.857 45.5783C368.645 60.9925 374.634 89.1317 374.634 89.1317H54.7738C54.7738 89.1317 60.7972 60.9652 56.5506 45.5783C47.1273 11.4346 0 44.5659 0 44.5659C0 44.5659 47.1273 77.6972 56.5506 43.5535C60.7972 28.1665 54.7738 0 54.7738 0Z" fill="white" fill-opacity="0.1" />
                </svg>
                <h2 className="text-4xl font-bold mb-4 text-center font-Fredoka">ROADMAP</h2>
            </div>

            <div className="mt-8 relative pl-10 lg:flex lg:flex-row lg:justify-between lg:mt-20 lg:pt-8">
                <span className="w-[1.5px] h-full bg-secondary-sub absolute top-0 left-6 block lg:hidden">
                    <span className="w-[1.5px] h-1/4 bg-gradient-to-t from-transparent to-black absolute top-0 left-0"></span>
                    <span className="w-[1.5px] h-1/4 bg-gradient-to-b from-transparent to-black absolute bottom-0 right-0"></span>
                    {/* <span className="w-6 h-6 absolute top-0 left-[10%] -translate-y-3 rounded-full bg-gradient-to-t from-secondary-sub to-primary"></span> */}
                </span>
                <span className="lg:w-full lg:h-[1.5px] lg:bg-secondary-sub lg:absolute lg:top-0 lg:block hidden">
                    <span className="w-1/4 h-[1.5px] bg-gradient-to-l from-transparent to-black absolute top-0 left-0"></span>
                    <span className="w-1/4 h-[1.5px] bg-gradient-to-r from-transparent to-black absolute top-0 right-0"></span>
                    {/* <span className="w-6 h-6 absolute top-0 left-[10%] -translate-y-3 rounded-full bg-gradient-to-t from-secondary-sub to-primary"></span> */}
                </span>
                {
                    roadmap.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.7, y: -20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: 'anticipate' }}
                            className="relative lg:max-w-[30%] lg:h-fit 
                            before:content-[''] before:w-6 before:h-6 before:absolute before:top-[50%] lg:before:-top-8 before:-left-7 lg:before:left-[45%] before:-translate-y-3 before:rounded-full before:bg-gradient-to-t from-secondary-sub to-primary">
                            <div
                                className="flex flex-col mb-6 z-20 p-5 rounded-2xl relative overflow-hidden group lg:h-fit"
                                style={{ background: "rgba(255, 255, 255, 0.1)" }}>
                                <span className="before:opacity-70 group-hover:before:opacity-100 before:absolute before:w-[80px] before:h-20 before:bg-white before:blur-3xl before:rounded-full before:bg-gradient-to-r before-from-primary before-to-secondary-sub before:content-['']"></span>
                                <h3 className={`text-base font-semibold mb-2 text-secondary-sub`}>{phase.title}</h3>
                                <ul className="text-sm font-light leading-8">
                                    {
                                        phase.desc.map((point, index) => (
                                            <li key={index} className="flex flow-row">
                                                <span className="mr-2">🚀</span>
                                                {point}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
}

export default RoadmapSection;