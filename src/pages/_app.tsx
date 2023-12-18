import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DefaultTheme from "@/config/theme/DefaultTheme";
import GlobalStyle from "@/config/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultTheme>
      <GlobalStyle />
      <Component {...pageProps} />
    </DefaultTheme>
  );
}
