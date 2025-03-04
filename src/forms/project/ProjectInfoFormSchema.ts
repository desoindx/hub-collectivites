import { SousThematique, Status, Thematique } from "@prisma/client";
import z from "zod";
import { AddressCollectivite } from "@/services/adresseApi/types";

export const ProjectInfoFormSchema = z.object({
  nom: z.string().min(1, { message: "Veuillez renseigner le nom du projet" }),
  collectivite: z.custom<AddressCollectivite>((value) => !!value, {
    message: "Veuillez renseigner la collectivité du projet",
  }),
  description: z.string().min(1, { message: "Veuillez une description pour le projet" }),
  thematiques: z.nativeEnum(Thematique).array().nonempty("Veuillez selectionner au moins une thématique"),
  sousThematiques: z.nativeEnum(SousThematique).array().nonempty("Veuillez selectionner au moins une sous thématique"),
  status: z.nativeEnum(Status, { required_error: "Veuillez selectionner l'avancement du projet" }),
});
export type ProjectInfoFormData = z.infer<typeof ProjectInfoFormSchema>;
