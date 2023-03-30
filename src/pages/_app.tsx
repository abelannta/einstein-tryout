import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import NextProgress from "next-progress";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "@/styles/globals.css";

// export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
//   event(name, {
//     category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
//     value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
//     label: id, // id unique to current page load
//     nonInteraction: true, // avoids affecting bounce rate.
//   });
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5800FF" />
        <meta
          name="description"
          content="Aplikasi pintar untuk peminat tryout soal-soal ujian masuk perguruan tinggi populer di Indonesia dengan fitur yang aplikatif dan adaptif."
        />
        <title>NineIntelegence</title>
      </Head>
      <GoogleAnalytics trackPageViews />
      <NextProgress
        delay={300}
        options={{ showSpinner: false }}
        height="3px"
        color="#FFC300"
      />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
