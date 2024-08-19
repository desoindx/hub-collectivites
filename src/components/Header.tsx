"use client";
import { Header as HeaderDSFR } from "@codegouvfr/react-dsfr/Header";
import { ROUTES } from "@/app/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
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
        title: "Accueil - Hub collectivités"
      }}
      id="fr-header-simple-header"
      navigation={[
        {
          isActive: pathname === "/",
          linkProps: {
            href: "/"
          },
          text: "Accueil"
        },
        {
          isActive: pathname === ROUTES.CREATION_PROJET,
          linkProps: {
            href: ROUTES.CREATION_PROJET
          },
          text: "Saisir un projet"
        },
        {
          isActive: pathname?.startsWith(ROUTES.LISTE_PROJETS) && pathname !== ROUTES.CREATION_PROJET,
          linkProps: {
            href: ROUTES.LISTE_PROJETS
          },
          text: "Gérer mes projets"
        }
      ]}
    />
  );
};

export default Header;
