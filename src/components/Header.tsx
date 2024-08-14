import React from "react";
import { Header as HeaderDSFR } from "@codegouvfr/react-dsfr/Header";

const Header = ({ activePage }: { activePage: string }) => {
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
      navigation={[
        {
          isActive: activePage === "/",
          linkProps: {
            href: "/",
          },
          text: "Accueil",
        },
        {
          isActive: activePage === "/projets",
          linkProps: {
            href: "/projets",
          },
          text: "Gérer mes projets",
        },
      ]}
    />
  );
};

export default Header;
