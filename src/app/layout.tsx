import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "hyuk 블로그",
    template: "hyuk 블로그 | %s",
  },
  description: "풀스택 개발자 hyuk 블로그",
  icons: {
    icon: "/favicon.ico",
  },
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
