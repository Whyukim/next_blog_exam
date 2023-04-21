import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col">
        <Header />
        <main className="grow w-full max-w-[1220px] mx-auto py-10">
          {children}
        </main>
        <Footer />
      </body> 
    </html>
  );
}
