import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
