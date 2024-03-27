import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { HamburgerIcon } from "../SVGs/SVGicons";
import Link from "next/link";
import { styles } from "@/app/constants/styles";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    
    function scrollToSection(id: string, offset?: number) {

        // Get element by id 
        const el = document.getElementById(id);
        // Check if the id exists and scroll to it
        if (el) {

            window.scrollTo({
                top: offset ? el.offsetTop - offset : el.offsetTop - 72,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="fixed top-0 w-full p-4 z-30 px-[8%]">
            <div className="z-30 relative p-5 py-4 rounded-3xl flex flow-row justify-between" style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(75px)" }}>
                <div className="flex flex-row items-center">
                    <span className="w-10 h-10 mr-2">
                        <Image src={images.logo} className="object-contain" alt="Logo" />
                    </span>
                    <p className="text-lg font-semibold">ANTON</p>
                </div>

                <ul className="flex items-center">
                    <li className="mx-2">
                        <span onClick={() => scrollToSection("hero")} className={styles.navLink}>
                            Home
                        </span>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => scrollToSection("about")} className={styles.navLink}>
                            About
                        </span>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => scrollToSection("roadmap")} className={styles.navLink}>
                            Roadmap
                        </span>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => scrollToSection("presale")} className={styles.navLink}>
                            Presale
                        </span>
                    </li>
                    <li className="mx-2">
                        <button className="inline-block text-sm font-normal px-3 py-2 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark">
                            Download Whitepaper
                        </button>
                    </li>
                </ul>

                {/* <span className="w-18 h-18 grid place-items-center p-1 rounded-lg bg-white bg-opacity-10">
                    <HamburgerIcon />
                </span> */}
            </div>
        </nav>
    );
}

export default Navbar;