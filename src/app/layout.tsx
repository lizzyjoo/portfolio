import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lizzy Joo",
  description: "Software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" w-mod-ix">
      <body className={`bg-brand-dark text-brand-light font-sans antialiased`}>
        <div
          id="cursor-dot"
          className="fixed top-0 left-0 w-3 h-3 bg-brand-green rounded-full z-[9999] pointer-events-none origin-center transform-gpu scale-0 hidden md:flex items-center justify-center"
        >
          <span
            id="cursor-text"
            className="text-xs text-brand-dark font-semibold opacity-0"
          >
            View
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
