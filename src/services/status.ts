import { Status } from "@prisma/client";
import { SelectOption } from "@/types/options";

export const statusLabel: Record<Status, string> = {
  IDEE: "Idée",
  FAISABILITE: "Faisabilité",
  A_VENIR: "À venir",
  EN_COURS: "En cours",
  EN_PAUSE: "En pause",
  ABANDONNE: "Abandonné",
  TERMINE: "Terminé",
};

export const statusProjectOptions: SelectOption[] = [
  ...Object.entries(statusLabel).map((projectStatus) => ({ name: projectStatus[1], value: projectStatus[0] })),
];
