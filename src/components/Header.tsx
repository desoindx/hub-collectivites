"use client";
import { Header as HeaderDSFR } from "@codegouvfr/react-dsfr/Header";
import { ROUTES } from "@/app/routes";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();
  const session = useSession();

  const navigationItems =
    session.status !== "authenticated"
      ? [
          {
            isActive: pathname === "/",
            linkProps: {
              href: "/",
            },
            text: "Accueil",
          },
        ]
      : [
          {
            isActive: pathname === "/",
            linkProps: {
              href: "/",
            },
            text: "Accueil",
          },
          {
            isActive: pathname === ROUTES.CREATION_PROJET,
            linkProps: {
              href: ROUTES.CREATION_PROJET,
            },
            text: "Saisir un projet",
          },
          {
            isActive: pathname?.startsWith(ROUTES.LISTE_PROJETS) && pathname !== ROUTES.CREATION_PROJET,
            linkProps: {
              href: ROUTES.LISTE_PROJETS,
            },
            text: "Gérer mes projets",
          },
        ];

  return (
    <HeaderDSFR
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
      navigation={navigationItems}
      quickAccessItems={
        session.status !== "authenticated"
          ? [
            {
              linkProps: {
                href: ROUTES.CONNEXION,
              },
              iconId: "fr-icon-lock-line",
              text: "Se connecter",
            },
          ]
          : [
              {
                linkProps: {
                  href: ROUTES.DECONNEXION,
                },
                iconId: "ri-logout-box-line",
                text: "Se déconnecter",
              },
            ]
      }
    />
  );
};

export default Header;
