import z from "zod";

export const ProjetInfoFormSchema = z.object({
  nom: z.string().min(1, { message: "Veuillez renseigner le nom du projet" }),
  description: z.string().min(1, { message: "Veuillez une description pour le projet" }),
});
export type ProjetInfoFormData = z.infer<typeof ProjetInfoFormSchema>;
