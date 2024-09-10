import { SousThematique, Thematique } from "@prisma/client";

export const thematiquesLabel: Record<Thematique, string> = {
  CULTURE: "Culture et identité collective",
  EAU: "Eau et milieux aquatiques",
  ENERGIE: "Énergies / Déchets",
  MOBILITE: "Mobilité / transports",
};

export const sousThematiquesInfo: Record<
  SousThematique,
  {
    label: string;
    thematiques: Thematique[];
  }
> = {
  ART_PLASTIQUES: { label: "Arts plastiques et photographie", thematiques: [Thematique.CULTURE] },
  MEDIAS: { label: "Médias et communication", thematiques: [Thematique.CULTURE] },
  MUSEE: { label: "Musée", thematiques: [Thematique.CULTURE] },
  //EAU
  ASSAINISSEMENT: { label: "Assainissement des eaux", thematiques: [Thematique.EAU] },
  PLUVIALE: { label: "Eau pluviale", thematiques: [Thematique.EAU] },
  POTABLE: { label: "Eau potable", thematiques: [Thematique.EAU] },
  //ENERGIE
  ECONOMIE: { label: "Economie d'énergie et rénovation énergétique", thematiques: [Thematique.ENERGIE] },
  RECYCLAGE: { label: "Recyclage et valorisation des déchets", thematiques: [Thematique.ENERGIE] },
  DISTRIBUTION: { label: "Distribution de l’énergie", thematiques: [Thematique.ENERGIE] },
  //MOBILITE
  CONNAISSANCE: { label: "Connaissance de la mobilité", thematiques: [Thematique.MOBILITE] },
  INFORMATION: { label: "Information voyageur", thematiques: [Thematique.MOBILITE] },
  URBAINE: { label: "Logistique urbaine", thematiques: [Thematique.MOBILITE] },
};
