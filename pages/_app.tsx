import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Hanken_Grotesk } from "next/font/google";

const hanken_Grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-expletus",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
