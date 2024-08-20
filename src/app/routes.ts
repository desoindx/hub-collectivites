export const ROUTES = {
  LISTE_PROJETS: "/projets",
  CREATION_PROJET: "/projets/creation",
  FICHE_PROJET: (projetId: string) => `/projets/${projetId}`,
  CONNEXION: "/connexion",
  DECONNEXION: "/logout",
};
