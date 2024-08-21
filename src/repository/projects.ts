import { prisma } from "@/services/prisma";
import { ProjectInfoFormData } from "@/forms/project/ProjectInfoFormSchema";
import { SousThematique, Status, Thematique } from "@prisma/client";

export const getProjectsByEmail = (email: string) => prisma.project.findMany({ where: { owner: email } });

export const getProjectById = (id: string) => prisma.project.findFirst({ where: { id } });

export const createProject = (data: ProjectInfoFormData, ownerEmail: string) =>
  prisma.project.create({
    data: {
      name: data.nom,
      description: data.description,
      owner: ownerEmail,
      status: Status.EVALUATION,
      thematiques: data.thematiques,
      sousThematiques: data.sousThematiques,
    },
  });

export type Project = Exclude<Awaited<ReturnType<typeof getProjectsByEmail>>, null>[number];
