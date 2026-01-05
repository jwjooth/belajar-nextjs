// import styles from "@/styles/Home.module.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import Head from "next/head";
// import Image from "next/image";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <p>hello world jordan!</p>
    </>
  );
}
