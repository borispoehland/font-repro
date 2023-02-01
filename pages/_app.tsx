import { Noto_Serif_Balinese } from "@next/font/google";
import { AppProps } from "next/app";

import "../globals.css"

const font = Noto_Serif_Balinese({
  weight: ["400"],
  style: ["normal"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-app: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

