import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Head from "next/head";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello World</title>;
        <meta name="A Twitter Clone with NextJS by Son Le" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-7xl">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  );
}
