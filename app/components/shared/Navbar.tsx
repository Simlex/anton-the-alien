import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { HamburgerIcon } from "../SVGs/SVGicons";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    return (
        <nav className="fixed top-0 w-full p-4 z-30 px-[8%]">
            <div className="z-30 relative p-5 py-4 rounded-3xl flex flow-row justify-between" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(75px)" }}>
                <div className="flex flex-row items-center">
                    <span className="w-10 h-10 mr-2">
                        <Image src={images.logo} className="object-contain" alt="Logo" />
                    </span>
                    <p className="text-lg font-semibold">ANTON</p>
                </div>

                {/* <span className="w-18 h-18 grid place-items-center p-1 rounded-lg bg-white bg-opacity-10">
                    <HamburgerIcon />
                </span> */}
            </div>
        </nav>
    );
}

export default Navbar;