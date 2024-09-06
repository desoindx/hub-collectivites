import z from "zod";

export const UpdateProjectSchema = z.object({
  name: z.string().min(1, { message: "Veuillez renseigner le nom du projet" }),
  description: z.string().min(1, { message: "Veuillez une description pour le projet" }),
});

export type UpdateProjectData = z.infer<typeof UpdateProjectSchema>;
