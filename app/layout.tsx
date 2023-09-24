import "./globals.scss";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import style from "./home.module.scss";
import { TheNavbar } from "../components/navbar/navbar";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dog App",
  description: "DogApp: Application for DogsLikers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="dogs, pet, pets, dog , dogapi, dogapp, doglikers"
        />
        <meta charSet="utf-8" />
      </head>
      <body className={`${style.body} ${font.className}`}>
        <nav className={`${style.navbar}`}>
          <TheNavbar />
        </nav>
        <main className={`${style.main}`}>{children}</main>
      </body>
    </html>
  );
}
