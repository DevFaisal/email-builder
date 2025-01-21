import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/providers/ContextProvider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Email Builder",
  description: "Generated Beautiful Email templates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>{children}</ContextProvider>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <Link
            href="https://www.linkedin.com/in/dev-faisal/"
            className="text-blue-400 hover:text-blue-300 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Faisal
          </Link>
        </footer>
      </body>
    </html>
  );
}
