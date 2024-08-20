import { Status } from "@prisma/client";

export const statusLabel: Record<Status, string> = {
  EVALUATION: "Evaluation des actions déployées",
  LANCEMENT: "Lancement des travaux",
  PRIORISATION: "Priorisation des solutions de rafraîchissement à déployer",
  QUESTIONNEMENT: "Questionnement sur la surchauffe urbaine au sein d’une commune",
  REDACTION: "Rédaction du cahier des charges",
};
