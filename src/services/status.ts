import { Status } from "@prisma/client";

export const statusLabel: Record<Status, string> = {
  IDEE: "Idée",
  FAISABILITE: "Faisabilité",
  A_VENIR: "À venir",
  EN_COURS: "En cours",
  EN_PAUSE: "En pause",
  ABANDONNE: "Abandonné",
  TERMINE: "Terminé",
};
