import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import Link from "next/link";
import { StartDsfr } from "./StartDSFR";
import "./globals.css";
import MainLayoutProviders from "@/components/MainLayoutProviders";
import Header from "@/components/Header";

export const metadata = {
  title: "Hub collectivités",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ defaultColorScheme: "light", lang })}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} preloadFonts={["Marianne-Regular", "Marianne-Medium", "Marianne-Bold"]} />
      </head>
      <body>
        <MainLayoutProviders lang={lang}>
          <Header />
          {children}
        </MainLayoutProviders>
      </body>
    </html>
  );
}
