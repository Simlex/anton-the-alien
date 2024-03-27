"use client"
import { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Image from "next/image";
import images from "@/public/images";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const [loaderIsVisible, setLoaderIsVisible] = useState(true);
    const iswindow = typeof window !== "undefined" ? true : false;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    return (
        <>
            {
                !loaderIsVisible &&
                <>
                    {/* <Toaster
                        position="bottom-center"
                        richColors
                        closeButton
                        toastOptions={{
                            duration: 3000,
                            unstyled: false,
                        }}
                    /> */}
                    <Navbar />
                    {children}
                    <Footer />
                </>
            }
            {
                loaderIsVisible &&
                <div className="w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center bg-white">
                    <div className="w-40 object-contain">
                        <Image src={images.logo} alt='logo' />
                    </div>
                </div>
            }
        </>
    );
}

export default Layout;