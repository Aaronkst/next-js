import { useEffect, useState } from "react";
import "../styles/main.css";
import type { AppProps } from "next/app";
import BackToTop from "../components/BackToTop";

function MyApp({ Component, pageProps }: AppProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && !showButton) {
        setShowButton(true);
      } else {
        if (showButton) setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <BackToTop showButton={showButton} />
    </>
  );
}

export default MyApp;
