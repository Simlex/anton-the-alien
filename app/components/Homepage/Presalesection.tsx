"use client";
import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PresaleSectionProps {}

const PresaleSection: FunctionComponent<
  PresaleSectionProps
> = (): ReactElement => {
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
        "Launch of $ANTON NFT collection",
      ],
    },
    {
      title: "Phase 2",
      desc: [
        "Merchandise Development",
        "Partnership airdrops",
        "Farming/Staking Launch",
        "More CEX Listings",
        "Enhanced Community Engagement",
      ],
    },
    {
      title: "Phase 3",
      desc: [
        "ANTON DEX Development",
        "ANTON Awareness Campaigns",
        "Partnership Expansion",
        "Continued Ecosystem Development",
      ],
    },
  ];

  return (
    <section
      className="px-5 py-20 lg:px-[8%] relative border-none"
      id="presale"
    >
      <span className="absolute w-full h-full top-0 left-0 opacity-45 z-[5]">
        <span className="absolute w-full z-10 h-64 bottom-0 bg-gradient-to-b from-transparent to-primary-dark"></span>
        <Image
          src={images.presale_bg}
          className="object-cover w-full h-full"
          alt="Space"
        />
      </span>

      <h2 className="text-4xl font-bold mb-12 text-center font-Fredoka z-20 relative">
        PRESALE
      </h2>

      <p className="text-sm font-normal leading-8 text-center z-20 relative">
        Presale is live now. Click button below.
      </p>

      <div className="grid place-items-center">
        <Link
          type="button"
          href="https://tonraffles.app/jetton/fairlaunch/ANTON"
          target="_blank"
          className="font-medium text-2xl whitespace-nowrap lg:text-4xl p-6 rounded-2xl border-b-4 border-secondary w-full md:w-1/2 lg:w-1/3 text-center font-Fredoka cursor-pointer relative z-20 bg-primary hover:bg-primary-dark"
          //   style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          Get Presale
        </Link>
      </div>
    </section>
  );
};

export default PresaleSection;
