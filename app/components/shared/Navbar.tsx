"use client"
import images from "@/public/images";
import Image from "next/image";
import { FunctionComponent, ReactElement, useState } from "react";
import { HamburgerIcon, MenuCloseIcon } from "../SVGs/SVGicons";
import Link from "next/link";
import { styles } from "@/app/constants/styles";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const [isMobileNavOverlayVisible, setIsMobileNavOverlayVisible] = useState(false);

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
                <Link href="/" className="flex flex-row items-center">
                    <span className="w-10 h-10 mr-2">
                        <Image src={images.logo} className="object-contain" alt="Logo" />
                    </span>
                    <p className="text-lg font-semibold">ANTON</p>
                </Link>

                <ul className="hidden items-center lg:flex">
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
                        <Link href='/anton_whitepaper.pdf' className="inline-block text-sm font-normal px-3 py-2 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark">
                            Download Whitepaper
                        </Link>
                    </li>
                </ul>

                <span className="w-18 h-18 hidden place-items-center p-1 rounded-lg bg-white bg-opacity-10 cursor-pointer hover:bg-white hover:bg-opacity-25">
                    <HamburgerIcon />
                </span>


                {
                    isMobileNavOverlayVisible &&
                    <div className="fixed w-full h-full bg-white top-0 left-0">

                        <div className={`flex flex-row justify-between items-center p-4 bg-white relative`}>
                            <Link href={"/"}>
                                <div className="w-52">
                                    <Image src={images.logo} alt="Anton logo" />
                                </div>
                            </Link>
                            <span
                                className="hidden w-8 h-8 items-center justify-center cursor-pointer md:grid"
                                onClick={() => setIsMobileNavOverlayVisible(false)}>
                                <MenuCloseIcon />
                            </span>
                        </div>


                        <div className="flex flex-col items-left p-4 gap-4">
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
                                <Link href='/anton_whitepaper.pdf' className="inline-block text-sm font-normal px-3 py-2 bg-primary rounded-2xl border-b-4 border-secondary hover:bg-primary-dark">
                                    Download Whitepaper
                                </Link>
                            </li>
                        </div>

                    </div>
                }

            </div>
        </nav>
    );
}

export default Navbar;