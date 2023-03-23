import "../styles/globals.css";
import { Roboto_Mono, Playfair_Display, Open_Sans } from "next/font/google";
import Opensans_CondensedBold from "next/font/local";
import Opensans_CondensedLight from "next/font/local";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-oss",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-rbm",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-pfd",
});

const opensans_condensedbold = Opensans_CondensedBold({
  src: "../public/fonts/OpenSans-CondBold.ttf",
  variable: "--font-ocb",
});

const opensans_condensedlight = Opensans_CondensedLight({
  src: "../public/fonts/OpenSans-CondLight.ttf",
  variable: "--font-ocl",
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${roboto_mono.variable} ${playfair_display.variable} ${opensans_condensedbold.variable} ${opensans_condensedlight.variable} ${open_sans.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
