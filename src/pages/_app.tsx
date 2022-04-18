import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import "react-loading-skeleton/dist/skeleton.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  let time;

  function reset() {
    router.push("/");
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(reset, 60000);
  }

  React.useEffect(() => {
    if (router.asPath === "/") return;

    window?.addEventListener("load", resetTimer, true);

    const events = [
      "mousedown",
      "onmousedown",
      "onclick",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
    ];

    events.forEach((name) => {
      document?.addEventListener(name, resetTimer, true);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
