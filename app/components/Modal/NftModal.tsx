"use client"
import { Dispatch, FunctionComponent, ReactElement, SetStateAction } from "react";
import ModalWrapper from "./ModalWrapper";
import Image from "next/image";
import images from "@/public/images";

interface NftModalProps {
    setVisibility: Dispatch<SetStateAction<boolean>>;
    visibility: boolean;
}

const NftModal: FunctionComponent<NftModalProps> = ({ visibility, setVisibility }): ReactElement => {
    return (
        <ModalWrapper
            visibility={visibility}
            setVisibility={setVisibility}
            styles={{ backgroundColor: 'transparent' }}>
            <div
                className='bg-white max-w-[85%] flex flex-col mx-auto p-4 rounded-2xl relative z-50 md:max-w-[65%] md:flex-row md:items-center'
                style={{ boxShadow: '10px 12px 50px rgba(0, 0, 0, 0.1)' }}>
                <span className="min-w-[100%] min-h-[auto] block md:min-w-[320px]">
                    <Image src={images.nft} alt="NFT" />
                </span>
                <div className="text-black">
                    <p className="leading-7 text-sm">
                        Introducing ANTON THE ALIEN, an exclusive NFT collection within ANTON, with a total supply
                        of 2100 mirroring the scarcity of $ANTON. Each NFT is a unique digital artwork, showcasing
                        creativity and rarity.
                        ANTON THE ALIEN will be tradeable on the top NFT marketplaces on TON Blockchain post-launch,
                        offering enthusiasts a chance to own a piece of this limited-edition collection where
                        innovation meets scarcity in the world of memecoins and NFTs.
                    </p>
                </div>
                <button
                    onClick={() => setVisibility(false)}
                    className="p-2 px-4 bg-primary rounded-2xl border-b-4 border-secondary mt-5 w-full md:absolute md:bottom-[5%] md:right-[4%] md:w-fit hover:bg-primary-dark">
                    Close
                </button>
            </div>
        </ModalWrapper>
    );
}

export default NftModal;