import { Header } from "@codegouvfr/react-dsfr/Header";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import Link from "next/link";
import { StartDsfr } from "./StartDSFR";
import "./globals.css";

export const metadata = {
  title: "Hub collectivités",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ defaultColorScheme: "light", lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            "Marianne-Regular",
            "Marianne-Medium",
            "Marianne-Bold",
          ]}
        />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <Header
            brandTop={
              <>
                REPUBLIQUE
                <br />
                FRANÇAISE
              </>
            }
            homeLinkProps={{
              href: "/",
              title: "Accueil - Hub collectivités",
            }}
            id="fr-header-simple-header"
            navigation={[
              {
                isActive: true,
                linkProps: {
                  href: "#",
                  target: "_self",
                },
                text: "Accueil",
              },
            ]}
          />
          <main>{children}</main>
        </DsfrProvider>
      </body>
    </html>
  );
}
