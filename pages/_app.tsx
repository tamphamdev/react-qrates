import "../styles/_grid.scss";
import "../styles/_mixin.scss";
import "../styles/main.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
