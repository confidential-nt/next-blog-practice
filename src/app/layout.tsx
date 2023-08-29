import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Park's blog | %s",
    default: "Park's blog",
  },
  description: "Park의 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="container mx-auto flex justify-between items-center py-6">
          <h1 className="text-xl font-bold">
            <Link href={"/"}>Park&apos;s Blog</Link>
          </h1>
          <nav>
            <Link href={"/"} className="mr-4">
              home
            </Link>
            <Link href={"/about"} className="mr-4">
              about
            </Link>
            <Link href={"/posts"} className="mr-4">
              posts
            </Link>
            <Link href={"/contact"} className="">
              contact
            </Link>
          </nav>
        </header>
        <main className="container bg-red-600 mx-auto">{children}</main>
        <footer className="container bg-red-600 mx-auto">
          <p className="text-center text-white bg-blue-950 text-sm py-2">
            Don&apos;t be pushed by your problems; be led by your dreams -
            Richard Stallman | All Right Reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
