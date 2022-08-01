import { useEffect, useState } from "react";
import "../styles/main.css";
import type { AppProps } from "next/app";
import BackToTop from "../components/BackToTop";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Khant Si Thu | Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <BackToTop showButton={showButton} />
    </>
  );
}

export default MyApp;
