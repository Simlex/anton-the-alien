import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import NextTopLoader from "nextjs-toploader";
import Layout from "./components/Layout";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anton The Alien",
    description: "Where Memes Meet Blockchain Brilliance",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader
                    color="#88EE86"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #39D3C1,0 0 5px #041B1C"
                />
                <Layout children={children} />
                {/* <Navbar />
                {children}
                <Footer /> */}
            </body>
        </html>
    );
}
