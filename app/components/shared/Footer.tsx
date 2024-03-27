import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";
import { LinktreeIcon, TelegramIcon, TwitterIcon } from "../SVGs/SVGicons";
import Link from "next/link";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {
    return (
        <footer className="p-8 bg-secondary-dark">
            <div className="flex flow-row justify-center mb-5">
                <Link href="https://t.me/+hPhuYumeoXE1NDI0" target="_blank" className="bg-white w-12 h-12 rounded-2xl grid place-items-center mr-4"><TelegramIcon /></Link>
                <Link href="https://t.me/+cEVxfExZTApiYWZk" target="_blank" className="bg-white w-12 h-12 rounded-2xl grid place-items-center mr-4"><TelegramIcon /></Link>
                <Link href="http://x.com/_alienanton" target="_blank" className="bg-white w-12 h-12 rounded-2xl grid place-items-center mr-4"><TwitterIcon /></Link>
                <Link href="https://linktr.ee/antonthealienn" target="_blank" className="bg-white w-12 h-12 rounded-2xl grid place-items-center mr-4"><LinktreeIcon /></Link>
            </div>
            <p className="font-light text-sm text-center">© Anton The Alien {new Date().getFullYear()} <br /> All rights reserved</p>
        </footer>
    );
}

export default Footer;