import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Card from "@/components/reusable/Card";
import Sidebar from "@/components/features/Sidebar";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import Navbar from "@/components/features/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <div className="min-h-screen bg-[#f2f1f6] dark:bg-[#313131]">
            <div className="grid grid-cols-8 w-full min-h-screen">
              <div className="lg:col-span-2 lg:block hidden sticky top-0 h-screen p-6">
                <div className="h-full">
                  <Card className="h-full">
                    <Sidebar/>
                  </Card> 
                </div>
              </div>
              <div className="lg:col-span-6 col-span-8 p-6 lg:mb-0 mb-24">
                {children}
              </div>
            </div>
            <Navbar/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
