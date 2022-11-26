import type { AppProps } from "next/app";
import Head from "next/head";
import NextProgress from "next-progress";
import "@/styles/globals.css";

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
        <title>Einstein Tryout</title>
      </Head>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}
