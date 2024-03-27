import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import NextTopLoader from "nextjs-toploader";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

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
                    color="#C1AB19"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #f7dd38,0 0 5px #928112"
                />
                <Layout children={children} />
                {/* <Navbar />
                {children}
                <Footer /> */}
            </body>
        </html>
    );
}
