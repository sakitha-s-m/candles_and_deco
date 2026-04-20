import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cormorant.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
