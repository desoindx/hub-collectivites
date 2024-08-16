import z from "zod";

export const ProjectInfoFormSchema = z.object({
  nom: z.string().min(1, { message: "Veuillez renseigner le nom du projet" }),
  description: z.string().min(1, { message: "Veuillez une description pour le projet" }),
});
export type ProjectInfoFormData = z.infer<typeof ProjectInfoFormSchema>;
