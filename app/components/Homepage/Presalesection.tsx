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
        NEW UPDATE
      </h2>

      <p className="text-sm font-normal leading-8 text-center z-20 relative">
        $ANTON is live on Ston.fi
      </p>

      <div className="grid place-items-center">
        <Link
          type="button"
          href="https://app.ston.fi/swap?outputCurrency=EQBOzLkwg7vNQF21j5Ast-f8ktCPS9ApG0j0iMcU2f125HKC"
          target="_blank"
          className="z-20 relative mt-8 block w-fit mx-auto p-3 px-6 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark"
          //   style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          Access it here
        </Link>
      </div>
    </section>
  );
};

export default PresaleSection;
