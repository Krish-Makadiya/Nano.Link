import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from 'next/font/google';

export const metadata = {
    title: "Nano.Link - Simple URL Shortener",
    description:
        "Shorten your long URLs quickly and easily with Nano.Link. Our free URL shortener creates compact, shareable links while maintaining reliability and security.",
    icons: {
        icon: "/link.png",
    },
};

export default function RootLayout({ children }) {
    const poppinsFont = Poppins({
    variable: '--font-poppins',
  });
    
    return (
        <html lang="en">
            <body className={`bg-[#faeee7] ${poppinsFont.variable} overflow-hidden`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
